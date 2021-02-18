const mongoose = require('mongoose');
const express = require('express');

const users = require('./routes/api/users');

const app = express();
const db = require("./config/keys");

console.log(db);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));