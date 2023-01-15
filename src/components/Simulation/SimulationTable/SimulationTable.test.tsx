
import {render} from '@testing-library/react';
import SimulationTable from './SimulationTable';

describe('SimulationTable component', () => {
    it('renders correctly', () => {
        render(<SimulationTable simulations={[]} />);
    });
});