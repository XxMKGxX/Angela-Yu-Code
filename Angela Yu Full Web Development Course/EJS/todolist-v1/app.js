const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [
    'caleb is great'
];

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')


app.get("/", function(req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options)

    res.render("list", { kindOfDay: day, newListItems: items }) //kindOfDay is the var name and day is the value of that var based on the if else statement
});

app.post("/", function(request, response) {
    var item = request.body.newItem;
    items.push(item);
    response.redirect("/");
})

app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000")
});