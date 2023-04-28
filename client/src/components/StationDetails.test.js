// import { StationDetails } from './StationDetails';

// describe(StationDetails, () => {
//     it('should...', () => {
        
//     });
// });

// Should fetch data
// Should display the data in a list/table

import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import { StationDetails } from './StationDetails';

jest.mock('axios');

describe('StationDetails', () => {
  it('renders the station details', async () => {
    const mockStation = [{
      station_name: 'Test Station',
      address: 'Test Address',
      departure_count: 10,
      return_count: 5
    }];
    axios.get.mockResolvedValueOnce({ data: mockStation });
    const { getByText } = render(<StationDetails name="test-station" />);

    await waitFor(() => {
      expect(getByText('Test Station')).toBeInTheDocument();
      expect(getByText('Station address: Test Address')).toBeInTheDocument();
      expect(getByText('Number of journeys starting from the station: 10')).toBeInTheDocument();
      expect(getByText('Number of journeys ending to the station: 5')).toBeInTheDocument();
    });
  });

  it('handles error during data fetching', async () => {
    axios.get.mockRejectedValueOnce(new Error('Data fetch failed'));
    const { getByText } = render(<StationDetails name="test-station" />);

    await waitFor(() => {
      expect(getByText('Error: Failed to fetch data')).toBeInTheDocument();
    });
  });
});