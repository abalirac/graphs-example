import { Button, Card, Dialog } from "primereact";
import { useState, useEffect } from "react";
import SimulationEdit from "../../../components/Simulation/SimulationEdit/SimulationEdit";
import SimulationsTable from "../../../components/Simulation/SimulationTable/SimulationTable";
import { SimulationModel } from "../../../models/simulation.model";
import { SimulationService } from "../../../services/simulation.service";
import "./../Simulation.scss";


export default function SimulationList() {
    const [simulations, setSimulations] = useState<SimulationModel[]>([]);
    const [displayDialog, setDisplayDialog] = useState(false);

    useEffect(() => {
        // Fetch simulations data
        SimulationService.getSimulations()
        .then(response => setSimulations(response.results))
        .catch(error => console.log(error));
    }, []);

    const onSimulationCreated = (newSimulation: SimulationModel) => {
        setSimulations([...simulations, newSimulation]);
        setDisplayDialog(false);
    }

    const cardTitleTemplate = () => {
        return (
            <div className="flex justify-content-between">
                <span>Simulations:</span>
                <Button icon="pi pi-plus" className="p-button-sm" label="New simulation" onClick={() => setDisplayDialog(true)}></Button>
            </div>
        )
    }

    return (
        <>
            <Card  title={cardTitleTemplate}>
                <SimulationsTable simulations={simulations} />
            </Card>
            <Dialog header="New simulation:" visible={displayDialog} onHide={() => setDisplayDialog(false)} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}}>
                <SimulationEdit simulation={undefined} onSimulationCreated={onSimulationCreated} />
            </Dialog>
        </>
    )
}