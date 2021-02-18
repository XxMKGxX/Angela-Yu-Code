const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food",
    "Cook The Food",
    "Eat The Food"
];

let workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.set('view engine', 'ejs')


app.get("/", function(req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options)

    res.render("list", { listTitle: day, newListItems: items }) //kindOfDay is the var name and day is the value of that var based on the if else statement
});

app.get("/work", function(req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.post("/", function(request, response) {
    let item = request.body.newItem;

    console.log(request.body)
    if (request.body.button === "Work") {
        workItems.push(item)
        response.redirect("/work")
    } else {
        items.push(item);
        response.redirect("/")
    };

    items.push(item);
    response.redirect("/");
})

app.post("/work", function(req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
});

app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000")
});