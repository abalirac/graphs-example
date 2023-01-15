import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react';
import SimulationEdit from './SimulationEdit';

describe('SimulationEdit component', () => {
    it('doesnt create simulation when form is empty', () => {
        const onSimulationCreated = jest.fn();

        render(<SimulationEdit simulation={undefined} onSimulationCreated={onSimulationCreated} />);
        const button = screen.getByText('Create');

        fireEvent.click(button);

        expect(onSimulationCreated).toBeCalledTimes(0);
    });
});