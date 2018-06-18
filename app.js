const express = require('express');
const app = express();
const fs = require('fs');

// var router = express.Router();

const port = 7777;

app.use("/public", express.static('public'));

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
app.get('/get_equips', function (req, res) {
    console.log( getEquips());
    fs.readFile(__dirname + '/data/equipes.json', "UTF-8", (err, data) => {
        if (err) throw err;
        equipes = JSON.parse(data);
        return equipes;
    });
    res.json(getEquips());
});
/**
 * Route vers les groupes
 */
app.get('/get_groups', function (req, res) {
    console.log( getGroups());
    res.json( getGroups());
});
/**
* Route vers groupe specifique
*/
app.get('/get_groups/:id', function (req, res) {
    const letter = req.params.id;
    result = getGroupsById(letter);    
    console.log( getGroupsById(result));
    res.json(result);
});

/**
 * fonction qui recupère les equipes
 */
function getEquips() {
    let equipes ="";
    fs.readFile(__dirname + '/data/equipes.json', "UTF-8", (err, data) => {
        if (err) throw err;
        equipes = JSON.parse(data);
        return equipes;
    });
}
/**
 * fonction qui recupère des groupes
 */
function getGroups() {
    fs.readFile(__dirname + '/data/groups.json', "UTF-8", (err, data) => {
        if (err) throw err;
        const groups = JSON.parse(data);
        return groups;
    });
}

function getGroupsById(letter) {
    const groups = getGroups();
    group = groups.groups[letter];
    return group;
}

    /**
     * Port d'écoute du serveur
     */
    const listener = app.listen(port, function () {
        console.log('Serveur demarré sur le port ' + listener.address().port);
    })