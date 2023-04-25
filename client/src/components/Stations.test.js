import { screen, render } from '@testing-library/react';
import { Stations } from './Stations';

describe(Stations, () => {
    it("displays a list", () => {       
        render(<Stations />);
        expect(screen.findByRole("list").toBeInTheDocument);
    });
});

