import { MachineModel } from "../../models/machine.model";

export const mockMachines: MachineModel[] = [
    new MachineModel({
        "id": "Standard_NC24ads_A100_v4",
        "label": "ND A100 v4-series",
        "info_url": "https://learn.microsoft.com/en-us/azure/virtual-machines/nda100-v4-series"
      }),
    new MachineModel({
        "id": "NC6s",
        "label": "NC-series (6)",
        "info_url": "https://learn.microsoft.com/en-us/azure/virtual-machines/nc-series"
    })
]