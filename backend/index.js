import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QwfQZQydCe3tBkU",
    database:"citybikeapp"
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("hello this is the backend");
});

app.post("/journeys", (req, res) => {
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

app.get("/journeys", (req, res) => {
    const q = "SELECT * FROM journeys";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/stations", (req, res) => {
    const q = "SELECT * FROM stations ORDER BY station_name ASC";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/stations/:name", (req, res) => {
    const q = `SELECT s.station_name, s.address, count(j.departure_station_name) AS departure_count, count(o.return_station_name) AS return_count FROM stations s LEFT OUTER JOIN journeys j ON s.station_name = j.departure_station_name LEFT OUTER JOIN journeys o ON s.station_name = o.return_station_name WHERE s.station_name LIKE '${req.params.name}' GROUP BY s.station_name, s.address`;
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connected to backend!");
});