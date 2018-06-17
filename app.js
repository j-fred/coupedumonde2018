const express = require('express');
const app = express();
const fs = require('fs');

// var router = express.Router();

const port = 7777;

app.use("/public",express.static('public'));

/**
 * Route vers index.html
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/**
 * Route vers equipes.html
 */
app.get('/equipes', function (req, res) {
    res.sendFile(__dirname + '/html/equipes.html');
});

/**
 * Route vers liste des equipes
 */
app.get('/get_equipes', function (req, res) {
    fs.readFile(__dirname+'/data/equipes.json', "UTF-8", (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        res.json(data);
    });
});
/**
 * Port d'écoute du serveur
 */
const listener = app.listen(port, function () {
    console.log('Serveur demarré sur le port ' + listener.address().port);
})