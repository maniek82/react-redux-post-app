const express = require("express");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname)); 

app.listen(port, () => {
    console.log('Server started"');
});

