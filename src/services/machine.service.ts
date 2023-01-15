import { IPageResponse } from "../interfaces/page-response.interface";
import { mockMachines } from "./mocked-data/mocked-machines";

export abstract class MachineService {

    //TODO grab URL from env variable and use it in real api call
    private static machinesUrl = 'api/v1/machines';

    public static async getMachines(params?: any) : Promise<IPageResponse> {
        return new Promise((resolve) => {
            setTimeout(() => {
                //TODO use params to get different pages
                resolve({
                    "count": 1,
                    "page_size": 999,
                    "page": 2,
                    "results": mockMachines
                });
            }, 100);
        });
    }

}