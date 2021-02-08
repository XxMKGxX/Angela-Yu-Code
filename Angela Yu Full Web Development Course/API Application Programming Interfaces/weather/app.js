const { log } = require("console");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Harare&appid=163659d072459ce0f09d45efb7800a50&units=metric"
    https.get(url, function(response) {

        console.log(response.statusCode)
        response.on("data", function(data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            console.log(desc)
            console.log(temp)
        })
    });
    res.send("Server is Up and Running!")
})


app.listen(3000, function(req, res) {
    console.log("Setting Up website in port 3000")
})