import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const Stations = () => {
  const [ stations, setStations ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/stations");
        console.log(res.data);
        setStations(res.data);
      } catch(err) {
        console.log(err);
      }
    }

    fetchData();

  }, []);

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List role="list">
          {stations.map((station) => (
            <ListItem disablePadding key={station.fid}>
              <ListItemButton 
                component={Link} 
                to={`/stations/${station.station_name}`}>
                <ListItemText primary={station.station_name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}