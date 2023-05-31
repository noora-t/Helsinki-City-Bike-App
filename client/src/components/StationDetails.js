import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINT } from '../api/index';

export const StationDetails = () => {
    const [ station, setStation ] = useState("");
    const { name } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_ENDPOINT}/stations/${name}`);
                setStation(res.data);
            } catch(err) {
                console.log(err);
            }
        }

        fetchData();

    }, []);

    return (
        <div>
            {station && <h2>{station[0].name_finnish}</h2>}
            {station && <p>Address: {station[0].address_finnish}</p>}
            {station && <p>Journeys starting from the station: {station[0].departure_count}</p>}
            {station && <p>Journeys ending to the station: {station[0].return_count}</p>}
        </div>
    );
};