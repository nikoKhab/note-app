const express = require("express");
const app = express();

const { PORT } = require("./config");

app.listen(PORT, () => {
    console.log("app is running successfully on port 3000")
})

app.get('/', (req, res) => {
    res.send("Hello, world")
})