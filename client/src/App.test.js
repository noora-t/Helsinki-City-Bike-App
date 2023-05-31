import { render, screen } from '@testing-library/react';
import App from './App';

describe("City Bike App", () => {
    test('renders header', () => {
        render(<App />);
        const headerElement = screen.getByText(/Helsinki City Bike App/i);
        expect(headerElement).toBeInTheDocument();
    });
});

  