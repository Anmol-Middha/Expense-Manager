const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const db = require("./config/keys").mongoURI;
mongoose.connect(db, {useNewUrlParser: true});

const expense = require('./routes/expense.js');

app.use('/', expense);

module.exports = app;
