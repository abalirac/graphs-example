import { ConvergencyInfoModel } from "./convergency-info.model";
import { MachineModel } from "./machine.model";
import { SimulationStatusEnum } from "./simulation-status.enum";

export class SimulationModel {
    id: number;
    label: string;
    status: SimulationStatusEnum;
    machine?: MachineModel;
    created: Date;
    modified: Date;
    conv_info?: ConvergencyInfoModel | null;

    constructor(data?: any) {
        this.id = data?.id;
        this.label = data?.label;
        this.status = data?.status;
        this.machine = data?.machine;
        this.created = data?.created;
        this.modified = data?.modified;
        this.conv_info = data?.conv_info;
    }
}