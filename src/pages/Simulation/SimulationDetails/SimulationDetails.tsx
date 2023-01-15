import { Card, Chip } from "primereact";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInterval } from "usehooks-ts";
import SimulationGraph from "../../../components/Simulation/SimulationGraph/SimulationGraph";
import { SimulationStatusEnum } from "../../../models/simulation-status.enum";
import { SimulationModel } from "../../../models/simulation.model";
import { SimulationService } from "../../../services/simulation.service";
import { DateUtils } from "../../../utils/DateUtils";
import "./../Simulation.scss";

export default function SimulationDetails() {
    const {id} = useParams();    
    const [simulation, setSimulation] = useState<SimulationModel>();
    const [isPlaying, setPlaying] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);

    /**
     * Call API on component init to load simulation
     */
    useEffect(() => {
        // Fetch simulation data
        SimulationService.getSimulation(Number(id))
        .then(response => {
            setPlaying(response?.status === SimulationStatusEnum.running);
            setSimulation(response);
        })
        .catch(error => console.log(error))
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * Poll API to get new simulation data
     */
    useInterval(
        () => {
            setLoading(true);
            // Fetch simulation data
            SimulationService.getSimulation(Number(id), {pollApi: true})
            .then(response => {
                setSimulation({...response});
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        },
        // Delay in milliseconds or null to stop it
        isPlaying ? 5000 : null,
    );

    return (
        <>
            <Card title={`Simulation details`}>
                <ul className="list-none p-0 m-0">
                    <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Label</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{simulation?.label}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Status</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                            <Chip label={simulation?.status} className={`simulation-badge status-${simulation?.status}`}></Chip>
                        </div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Machine</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{simulation?.machine?.label}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Creation date</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{DateUtils.formatDate(simulation?.created)}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Modification date</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{DateUtils.formatDate(simulation?.modified)}</div>
                    </li>
                </ul>
            </Card>
            <Card title={simulation?.conv_info?.label}>
                {simulation?.status === SimulationStatusEnum.running &&
                    <div className="flex justify-content-end align-items-center m-3">
                        <span>{`Last updated: ${DateUtils.formatDate(simulation.modified)}`}</span>
                        {isLoading && <i className="pi pi-spin pi-spinner ml-1" style={{'fontSize': '1.5em'}}></i>}
                        <i className={isPlaying ? "pi pi-pause ml-2" : "pi pi-play ml-2"} onClick={() => setPlaying(!isPlaying)}> </i>
                    </div>
                }
                <SimulationGraph simulation={simulation}/>
            </Card>
        </>
    )
}