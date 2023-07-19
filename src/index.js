const dotenv = require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require("cors");


const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    const response = await db.query("SELECT * FROM Historics;")
    return res.status(200).json(response);
})

app.post('/', async (req, res) => {
    const { historic, dt } = req.body;
    const response = await db.query("INSERT INTO Historics (historic, dt) VALUES(?,?)", [historic, dt]);
    return res.status(200).json(response);
})

app.listen(port, () => console.log("server running on port: " + port));
