require('dotenv').config();

const es6Renderer = require('express-es6-template-engine');
const mvp = require('./mvp.json');
const express = require('express');

const server = express();

server.engine('html', es6Renderer);
server.set('views', 'views');
server.set('view engine', 'html');

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(express.static(__dirname + '/public'));

server.get('/mvp', (req, res) => {
    res.send(mvp);
});

server.get('/mvp/years/:year', (req, res) => {
    res.send(`mvps ${req.params.year}`)
})

server.get('/mvp/players/:player', (req, res) => {
const {player} = req.params.name;
res.send(`Player Info: ${player}`);
});

server.get('/', (req, res) => {
    res.render('index', {
    partials: {   
    footer: 'partials/footer',
    header: 'partials/header',
    main: 'partials/main/landing' 
    }});
});   // this is the home page
 

const PORT = process.env.PORT || 8080;

server.get('/heartbeat', (req, res) => {
    res.json({ 'is': 'working',
    "status": "good" })
});

server.listen(PORT, () => console.log(`The server is running on port ${PORT}.`));
