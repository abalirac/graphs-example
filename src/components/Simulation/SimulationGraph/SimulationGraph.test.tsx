import {render, screen} from '@testing-library/react';
import SimulationGraph from './SimulationGraph';

describe('SimulationGraph component', () => {
    it('shows no graph text when no simulation provided', () => {
        render(<SimulationGraph simulation={undefined} />);
        expect(screen.getByText('No graph data')).toBeInTheDocument();
    });
});