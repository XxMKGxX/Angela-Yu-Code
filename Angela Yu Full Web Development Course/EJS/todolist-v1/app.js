const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs')


app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;

        default:
            break;
    }

    res.render("list", { kindOfDay: day }) //kindOfDay is the var name and day is the value of that var based on the if else statement
});

app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000")
});