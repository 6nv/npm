import { Chart } from './chart';
import { PumpchartOptions } from './types';

export class Pumpchart extends Chart<PumpchartOptions> {
    constructor(options: Partial<PumpchartOptions>) {
        super(options);
    }
    protected getDefaults(): PumpchartOptions {
        return {};
    }
}