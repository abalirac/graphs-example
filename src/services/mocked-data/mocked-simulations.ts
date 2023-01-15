import { ConvergencyInfoUnitModel } from "../../models/convergency-info-unit.model";
import { SimulationStatusEnum } from "../../models/simulation-status.enum"
import { SimulationModel } from "../../models/simulation.model"

export const mockSimulations: SimulationModel[] = [
    new SimulationModel({
        "id": 1,
        "label": "Physics simulation 1",
        "status": SimulationStatusEnum.pending,
        "machine": {
          "id": "Standard_NC24ads_A100_v4",
          "label": "ND A100 v4-series",
          "info_url": "https://learn.microsoft.com/en-us/azure/virtual-machines/nda100-v4-series"
        },
        "created": new Date("2021-09-26T06:01:58Z"),
        "modified": new Date("2021-09-26T06:01:58Z"),
        "conv_info": null
    }),
    new SimulationModel({
        "id": 2,
        "label": "BigOilCompany February sim.",
        "status": SimulationStatusEnum.running,
        "created": new Date("2021-09-26T08:14:15Z"),
        "modified": new Date("2021-09-26T08:22:15Z"),
        "conv_info": {
            "label": "Loss convergency evolution",
            "data": [
              {"seconds": 10, "loss": 0.8},{"seconds": 20, "loss": 0.7},{"seconds": 30, "loss": 0.65}
            ]
        }
    }),
    new SimulationModel({
        "id": 3,
        "label": "US EPA CO2 test",
        "status": SimulationStatusEnum.finished,
        "machine": {
          "id": "Standard_NC24ads_A100_v4",
          "label": "ND A100 v4-series",
          "info_url": "https://learn.microsoft.com/en-us/azure/virtual-machines/nda100-v4-series"
        },
        "created": new Date("2021-09-27T14:52:45Z"),
        "modified": new Date("2021-09-27T15:06:02Z"),
        "conv_info": {
           "label": "Loss convergency evolution",
           "data": [
             {"seconds": 10, "loss": 0.8},{"seconds": 20, "loss": 0.7},{"seconds": 30, "loss": 0.65},
             {"seconds": 40, "loss": 0.61},{"seconds": 50, "loss": 0.615},{"seconds": 60, "loss": 0.60},
             {"seconds": 70, "loss": 0.58},{"seconds": 80, "loss": 0.575},{"seconds": 90, "loss": 0.58},
             {"seconds": 100, "loss": 0.56},{"seconds": 110, "loss": 0.555},{"seconds": 120, "loss": 0.54},
             {"seconds": 130, "loss": 0.551},{"seconds": 140, "loss": 0.55},{"seconds": 150, "loss": 0.553},
             {"seconds": 160, "loss": 0.552},{"seconds": 170, "loss": 0.555},{"seconds": 180, "loss": 0.546},
             {"seconds": 190, "loss": 0.55}
           ]
         }
    }),
    new SimulationModel({
        "id": 4,
        "label": "My new simulation",
        "status": SimulationStatusEnum.pending,
        "machine": {
          "id": "Standard_NC24ads_A100_v4",
          "label": "ND A100 v4-series",
          "info_url": "https://learn.microsoft.com/en-us/azure/virtual-machines/nda100-v4-series"
        },
        "created": new Date("2021-09-26T06:01:58Z"),
        "modified": new Date("2021-09-26T06:01:58Z"),
        "conv_info": null
    })
]

/**
 * Mock new graph values for polling
 * @param response 
 */
  export const mockNewGraphValue = (response: SimulationModel) => {
  const lastValue = response?.conv_info?.data[response?.conv_info?.data.length - 1];
  if (lastValue) {
      const newData = new ConvergencyInfoUnitModel({
          seconds: lastValue?.seconds + 1,
          loss: Math.random()
      });
      response.modified = new Date();
      response?.conv_info?.data.push(newData);
  }
  return response;
}