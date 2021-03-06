/*============= IMPORTS =============*/

const mongoose = require('mongoose');
const express = require('express');

const users = require('./routes/api/users');

const bodyParser = require('body-parser');

const app = express();
const db = require("./config/keys").mongoURI;

/*=================================*/

mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/users', users);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));