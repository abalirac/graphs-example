import { IPageResponse } from "../interfaces/page-response.interface";
import { SimulationStatusEnum } from "../models/simulation-status.enum";
import { SimulationModel } from "../models/simulation.model";
import { mockNewGraphValue, mockSimulations } from "./mocked-data/mocked-simulations";

export abstract class SimulationService {

    //TODO grab URL from env variable and use it in real api call
    private static simulationsUrl = 'api/v1/simulations';

    public static async getSimulation(id: number, params?: any) : Promise<SimulationModel>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            const simulation = mockSimulations.find(s => s.id === id)
            if (simulation) {
                resolve(params?.pollApi ? mockNewGraphValue(simulation) : simulation);
            } else {
                reject(new Error("Simulation not found"))
            }
            }, 3000);
        });
    }

    public static async getSimulations(params?: any) : Promise<IPageResponse> {
        return new Promise((resolve) => {
            setTimeout(() => {
                //TODO use params to get different pages
                resolve({
                    "count": 3,
                    "page_size": 10,
                    "page": 1,
                    "results": mockSimulations
                });
            }, 100);
        });
    }

    public static async createSimulation(simulation: SimulationModel) : Promise<SimulationModel> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(new SimulationModel({
                    id: Math.floor(Math.random() * 1000),
                    label: simulation.label,
                    machine: simulation.machine,
                    created: new Date(),
                    modified: new Date(),
                    cov_info: null,
                    status: SimulationStatusEnum.pending
                }));
            }, 100);
        });
    }

}