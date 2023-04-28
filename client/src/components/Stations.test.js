// import { screen, render } from '@testing-library/react';
// import { Stations } from './Stations';

// describe(Stations, () => {
//     it("should display a list", () => {       
//         render(<Stations />);
//         expect(screen.findByRole("list").toBeInTheDocument);
//     });
// });

// Should fetch data
// Should display the data in a list

import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axiosMock from 'axios';
import { Stations } from './Stations';

jest.mock('axios');

describe('Stations', () => {
  it('should fetch stations and display them in a list', async () => {
    // Arrange
    const mockStations = [
      { fid: 1, station_name: 'Station A' },
      { fid: 2, station_name: 'Station B' },
    ];
    axiosMock.get.mockResolvedValueOnce({ data: mockStations });

    // Act
    render(
      <BrowserRouter>
        <Stations />
      </BrowserRouter>
    );

    // Assert
    expect(screen.getByRole('list')).toBeEmptyDOMElement();
    await waitFor(() => expect(axiosMock.get).toHaveBeenCalledTimes(1));
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('Station A')).toBeInTheDocument();
    expect(screen.getByText('Station B')).toBeInTheDocument();
  });

  it('should display an error message if the request fails', async () => {
    // Arrange
    axiosMock.get.mockRejectedValueOnce(new Error('Network error'));

    // Act
    render(
      <BrowserRouter>
        <Stations />
      </BrowserRouter>
    );

    // Assert
    await waitFor(() =>
      expect(screen.getByText('Error fetching stations.')).toBeInTheDocument()
    );
  });
});