const express = require("express");
const db = require("../database").databaseConnection;

const journeysRouter = express.Router();

journeysRouter.get("/", (req, res) => {
    const q = `SELECT * FROM journeys WHERE journey_id BETWEEN ${req.query.min} AND ${req.query.max} AND distance_meters >= 10 AND duration_seconds >= 10`;
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

journeysRouter.post("/", (req, res) => {
    const q = "INSERT INTO journeys (`departure_time`, `return_time`, `departure_station_id`, `departure_station_name`, `return_station_id`, `return_station_name`, `distance_meters`, `duration_seconds`) VALUES (?)";
    const values = [
        req.body["Departure"],
        req.body["Return"],
        req.body["Departure station id"],
        req.body["Departure station name"],
        req.body["Return station id"],
        req.body["Return station name"],
        req.body["Covered distance (m)"],
        req.body["Duration (sec.)"],
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Journey has been created successfully"); 
    });
});

module.exports = journeysRouter;