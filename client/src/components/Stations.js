import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const Stations = () => {
  const [ stations, setStations ] = useState([]);

  const showStations = async () => {
    try {
      const res = await axios.get("http://localhost:8800/stations");
      console.log(res.data);
      setStations(res.data);
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List role="list">
          {stations.map((station) => (
            <ListItem disablePadding key={station.fid}>
              <Link to={`stations/${station.departure_station_name}`}><ListItemButton component="a" href="#simple-list">
                <ListItemText primary={station.departure_station_name} />
              </ListItemButton></Link>
            </ListItem>
          ))}
        </List>
      </nav>
      <button onClick={showStations}>
           SHOW STATIONS
      </button>
    </Box>
  );
}

