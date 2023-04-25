import { screen, render } from '@testing-library/react';
import { Journeys } from './Journeys';

describe(Journeys, () => {
    it("displays a data grid", () => {       
        render(<Journeys />);
        expect(screen.findByRole("grid").toBeInTheDocument);
    });
});

