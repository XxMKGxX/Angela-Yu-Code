const express = require('express')
const bodyparser = require("body-parser")
const app = express()
app.use(bodyparser.urlencoded({
    extended: true
}))
const port = 3000

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/BMICalculator.html")
});

app.post("/", function(req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The Result is " + result)
})

app.post("/bmicalculator", function(req, res) {
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)
    var bmi = weight / (height * 2)

    res.send("Your BMI is " + bmi)
})

app.listen(port, function() {
        console.log(`Test Server is running at port 3000`)
    }

)