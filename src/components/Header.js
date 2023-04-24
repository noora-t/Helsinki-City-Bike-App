import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const Header = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div>
            <h1>Helsinki City Bike App</h1>
            <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            >
                <ToggleButton component={Link} to="/" value="journeys">Journeys</ToggleButton>
                <ToggleButton component={Link} to="/stations" value="stations">Stations</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}


