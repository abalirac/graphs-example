export class ConvergencyInfoUnitModel {
    seconds: number;
    loss: number;

    constructor(data?: any) {
        this.seconds = data?.seconds;
        this.loss = data?.loss;
    }
}