const express = require("express");
const path = require("path");

const compliments = [
    "you look nice today",
    "that dress looks great",
    "have you been working out?",
    "you can do hard things",
    "you've gotten far in this course, easier than you thought",
    "you're programming, how cool is that?",
    "go team",
    "you're so smart",
    "nice hair",
    "nice computer",
    "you smell good",
    "you have a nice shirt",
    "you're nice",
    "nice eyes",
    "nice beard"
];

function getRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length)
    return compliments[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/compliment", function(req, res) {
    res
        .json({
            compliment: getRandomCompliment()
        })
        .end();
})

const insults = [
    "your hair is oily",
    "you have bad breath",
    "did your grandma dress you",
    "you're so dumb",
    "that's an ugly dress",
    "you stink",
    "did you take a shower",
    "did you gain 30 lbs",
    "did you get your outfit from the dumpster"
];

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length)
    return insults[randomIndex];
}

app.get("/insult", function(req, res) {
    res
        .json({
            insult: getRandomInsult()
        })
        .end();
})

app.use("/public", express.static("./public"))

app.listen(80);

console.log("listening on http://localhost:80");

const port = process.env.PORT || 80;
app.listen(port);
console.log(`listening on http://localhost:${port}`);