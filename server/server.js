require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

const categoryRoutes = require('./routes/category.routes.js');
const userRoutes = require('./routes/user.routes.js');


//routes config
app.use('/api/categories', categoryRoutes.routes());
app.use('/api/users', userRoutes.routes());



app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
