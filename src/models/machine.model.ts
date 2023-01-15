export class MachineModel {
    id: string;
    label: string;
    info_url: string;

    constructor(data?: any) {
        this.id = data?.id;
        this.label = data?.label;
        this.info_url = data?.info_url;
    }
}