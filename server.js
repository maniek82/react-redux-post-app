const express = require("express");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 8080;
var serveStatic = require('serve-static');
const app = express();

app.use(ser(__dirname));


app.get('*', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log('Server started"');
});

