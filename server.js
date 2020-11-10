const express = require('express');
const cors = require('cors');

let { todos } = require('./data/todos');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
