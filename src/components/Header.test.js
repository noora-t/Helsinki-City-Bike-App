import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test("it should have a heading", () => {
    const { getByText } = render(<Header />);
    const text = getByText("Helsinki City Bike App");
    expect(text).toBeInTheDocument();
});