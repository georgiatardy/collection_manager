const express = require ('express');
const handlebars = require ('express-handlebars');
const bodyParser - require ('body-parser');
const routes = require ('./routes/routes')
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/people');

//Create Express App//
const app = express ();

//Tell Express to use handlebars//
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//Tell Express to use the bodyParser middleware to parse form data//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Use my routes//
app.use('/', routes);

//Connect to Mongo via Mongoose//
Mongoose
.connect('mongodb://localhost:27017/newdb', { useMongoClient: true})
.then(() => app.listen(3000, () => console.log('App is running!')));
