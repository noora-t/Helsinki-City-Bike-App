import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const StationDetails = () => {
    const [ station, setStation ] = useState("");
    const { name } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/stations/${name}`);
                console.log(res.data);
                setStation(res.data);
            } catch(err) {
                console.log(err);
            }
        }

        fetchData();

    }, []);

    return (
        <div>
            {station && <h2>{station[0].station_name}</h2>}
            {station && <p>Station address: {station[0].address}</p>}
            {station && <p>Number of journeys starting from the station: {station[0].departure_count}</p>}
            {station && <p>Number of journeys ending to the station: {station[0].return_count}</p>}
        </div>
    );
};