import { render, screen } from '@testing-library/react';
import { Journeys } from './Journeys';

describe(Journeys, () => {
  test('renders the table headers correctly', () => {
    render(<Journeys />);

    expect(screen.getByText('Departure Station')).toBeInTheDocument();
    expect(screen.getByText('Return Station')).toBeInTheDocument();
    expect(screen.getByText('Distance (km)')).toBeInTheDocument();
    expect(screen.getByText('Duration (min)')).toBeInTheDocument();
  });

  test('renders the table rows correctly', async () => {
    
  });
});