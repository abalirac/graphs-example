import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { MachineModel } from "../../../models/machine.model";
import { SimulationModel } from "../../../models/simulation.model"
import { MachineService } from "../../../services/machine.service";
import { SimulationService } from "../../../services/simulation.service";
import './SimulationEdit.scss';

export default function SimulationEdit ({
    simulation,
    onSimulationCreated
} : {
    simulation : SimulationModel | undefined,
    onSimulationCreated: Function

}) {   
    //TODO: Edit or create simulation depending on simulation prop value
    const [label, setLabel] = useState<string>();
    const [selectedMachine, setSelectedMachine] = useState<MachineModel>();
    const [machines, setMachines] = useState<MachineModel[]>([]);
    
    /**
     * Call API on component init to load machines
     */
     useEffect(() => {
        // Fetch machines data
        MachineService.getMachines()
        .then(response => setMachines(response.results))
        .catch(error => console.log(error));
    }, []);

    const handleSubmit = (event: React.FormEvent) => {  
        event.preventDefault();

        SimulationService.createSimulation(new SimulationModel({
            label: label,
            machine: selectedMachine
        }))
        .then(newSimulationModel => onSimulationCreated(newSimulationModel))
        .catch(error => console.log(error))
    }

    return (
       <form onSubmit={handleSubmit}>
            <label htmlFor="label" className="block text-900 font-medium mb-2">Label</label>
            <InputText 
                id="label" 
                type="text" 
                className="w-full mb-3" 
                placeholder="Add a label to the simulation"
                onChange={(e) => setLabel(e.target.value)}
                required
            />

            <label htmlFor="machine" className="block text-900 font-medium mb-2">Machine</label>          
            <Dropdown 
                value={selectedMachine} 
                options={machines} 
                onChange={(e) => setSelectedMachine(e.value)} 
                optionLabel="label" 
                placeholder="Select a machine"
                className=" flex max-w-full mb-3"
                required
            />

            <Button label="Create" icon="pi pi-plus" className="w-full mt-3" type="submit" />
        </form> 
    )
}