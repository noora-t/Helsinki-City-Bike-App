import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <h1 class="logo">Helsinki City Bike App</h1>
            <nav>
                <NavLink to="/journeys">Journeys</NavLink>
                <NavLink to="/stations">Stations</NavLink>
            </nav>
        </header>
    );
}