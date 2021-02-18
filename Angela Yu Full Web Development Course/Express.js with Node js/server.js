const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.send("Hello!")
});

app.get("/contact", function(req, res) {
    res.send("Contact Me at:");
});

app.get("/about", function(req, res) {
    res.send("Hi There. My name is Conrad and I am the creator of this website. Still work in progress.")
})

app.listen(3000, function() {
    console.log("server has started on port 3000");
});