const express = require("express")
const cors = require("cors")
const axios = require('axios');

const app = express()

app.use(express.json())
app.use(cors())

app.get('/weather/:input', (req, res) => {
    const input = req.params.input;
    const apiKey = 'API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

    axios.get(url)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error fetching weather data');
        });
});

app.listen(5000, () => {
    console.log("http://localhost:5000");
});