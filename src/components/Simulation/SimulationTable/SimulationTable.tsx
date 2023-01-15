import { SimulationModel } from "../../../models/simulation.model";
import { SimulationStatusEnum } from "../../../models/simulation-status.enum";
import { useState } from "react";
import "./SimulationTable.scss";
import { Link } from "react-router-dom";
import { DateUtils } from "../../../utils/DateUtils";
import { FilterMatchMode } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function SimulationTable ({
    simulations
} : {
    simulations: SimulationModel[]
}) {
    const [filters] = useState({
        'status': { value: null, matchMode: FilterMatchMode.EQUALS }
    });

    /**
     * Status badge template
     * @param status string 
     * @returns status badge colored
     */
    const statusBodyTemplate = (status: string) => {
        return <span className={`simulation-badge status-${status}`}>{status}</span>;
    }

    /**
     * Status filter dropdown
     * @param options object
     * @returns a dropdown with the status options
     */
    const statusRowFilterTemplate = (options: any) => {
        return <Dropdown 
            value={options.value} 
            options={Object.values(SimulationStatusEnum)} 
            onChange={(e) => options.filterApplyCallback(e.value)} 
            itemTemplate={statusBodyTemplate} 
            placeholder="Select a Status"
            className="p-column-filter" 
            showClear 
        />;
    }
    
    return (
        //TODO Implement server pagination
        <DataTable 
            value={simulations} 
            filters={filters} 
            filterDisplay="row" 
            responsiveLayout="scroll"
            emptyMessage="No simulations found."
            paginator
            rows={3}
        >
            <Column field="id" header="#"></Column>
            <Column field="label" header="Label" body={(simulation => <Link to={`/simulation/${simulation.id}`}>{simulation.label}</Link>)} sortable></Column>
            <Column field="machine.label" header="Machine"></Column>
            <Column 
                field="created" 
                dataType="date" 
                header="Created date" 
                body={(simulation: SimulationModel) => DateUtils.formatDate(simulation.created)} 
                sortable
            >
            </Column>
            <Column 
                field="modified" 
                dataType="date" 
                header="Modified date" 
                body={(simulation: SimulationModel) => DateUtils.formatDate(simulation.modified)} 
                sortable
            >
            </Column>
            <Column 
                field="status" 
                header="Status" 
                showFilterMenu={false} 
                filterMenuStyle={{ width: '14rem' }} 
                style={{ minWidth: '12rem' }} 
                body={(simulation) => statusBodyTemplate(simulation.status)} 
                filter 
                filterElement={statusRowFilterTemplate}
            >
            </Column>
        </DataTable>
    )
}
