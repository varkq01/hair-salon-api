require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate');
const {cors} = require('./middleware/cors');


const app = express();
const port = process.env.PORT;

app.use(cors);
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
