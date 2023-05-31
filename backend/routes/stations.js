const express = require("express");
const db = require("../database").databaseConnection;

const stationsRouter = express.Router();

stationsRouter.get("/", (req, res) => {
    const q = "SELECT * FROM stations ORDER BY name_finnish ASC";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

stationsRouter.get("/:name", (req, res) => {
    const q = `SELECT s.name_finnish, s.address_finnish, count(j.departure_station_id) AS departure_count, count(o.return_station_id) AS return_count FROM stations s LEFT OUTER JOIN journeys j ON s.id = j.departure_station_id LEFT OUTER JOIN journeys o ON s.id = o.return_station_id WHERE s.name_finnish LIKE '${req.params.name}' GROUP BY s.name_finnish, s.address_finnish`;
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

stationsRouter.post("/", (req, res) => {
    const q = "INSERT INTO stations (`id`, `name_finnish`, `name_swedish`, `name_english`, `address_finnish`, `address_swedish`, `city_finnish`, `city_swedish`, `operator`, `capacity`, `x_coordinate`, `y_coordinate`) VALUES (?)";
    const values = [
        req.body["ID"],
        req.body["Nimi"],
        req.body["Namn"],
        req.body["Name"],
        req.body["Osoite"],
        req.body["Adress"],
        req.body["Kaupunki"],
        req.body["Stad"],
        req.body["Operaattor"],
        req.body["Kapasiteet"],
        req.body["x"],
        req.body["y"],
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Station has been created successfully"); 
    });
});

module.exports = stationsRouter;