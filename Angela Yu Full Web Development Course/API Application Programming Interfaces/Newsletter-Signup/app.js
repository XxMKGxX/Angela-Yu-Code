const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});


app.listen(3000, function(req, res) {
    console.log("Server running in port 3000")
});

app.post("/", function(req, res) {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email)
})