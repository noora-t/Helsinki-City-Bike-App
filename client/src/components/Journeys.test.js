// import { screen, render } from '@testing-library/react';
// import { Journeys } from './Journeys';

// describe(Journeys, () => {
//     it("should display a table", () => {       
//         render(<Journeys />);
//         expect(screen.findByRole("table").toBeInTheDocument);
//     });
// });

// Should fetch data
// Should display the data in a table
// pagination should work

import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Journeys } from './Journeys';

describe('Journeys component', () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  test('renders the table header correctly', () => {
    render(<Journeys />);

    expect(screen.getByText('Departure Station')).toBeInTheDocument();
    expect(screen.getByText('Return Station')).toBeInTheDocument();
    expect(screen.getByText('Distance (km)')).toBeInTheDocument();
    expect(screen.getByText('Duration (min)')).toBeInTheDocument();
  });

  test('renders the rows correctly', async () => {
    const mockData = [{ journey_id: 1, departure_station_name: 'Station 1', return_station_name: 'Station 2', distance_meters: 1500, duration_seconds: 1200 }, { journey_id: 2, departure_station_name: 'Station 2', return_station_name: 'Station 3', distance_meters: 2000, duration_seconds: 1800 }];
    mockAxios.onGet('http://localhost:8800/journeys').reply(200, mockData);

    render(<Journeys />);

    expect(await screen.findByText('Station 1')).toBeInTheDocument();
    expect(screen.getByText('Station 2')).toBeInTheDocument();
    expect(screen.getByText('1.5')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('Station 2')).toBeInTheDocument();
    expect(screen.getByText('Station 3')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('handles error during data fetching', async () => {
    axios.get.mockRejectedValueOnce(new Error('Data fetch failed'));
    const { getByText } = render(<Journeys name="test-journey" />);

    await waitFor(() => {
      expect(getByText('Error: Failed to fetch data')).toBeInTheDocument();
    });
  });
});