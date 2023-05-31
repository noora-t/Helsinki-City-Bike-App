require("dotenv").config({path: './.env'});
const express = require("express");
const cors = require("cors");

const indexRouter = require('./routes/index.js');
const journeysRouter = require('./routes/journeys.js');
const stationsRouter = require('./routes/stations.js');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/journeys', journeysRouter);
app.use('/stations', stationsRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
});

