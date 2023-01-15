import { ConvergencyInfoUnitModel } from "./convergency-info-unit.model";

export class ConvergencyInfoModel {
    label: string;
    data: ConvergencyInfoUnitModel[];

    constructor(data?: any) {
        this.label = data?.label;
        this.data = data?.data;
    }
}