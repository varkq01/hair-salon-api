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
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

process.env.TZ = 'Europe/Budapest'; 

const categoryRoutes = require('./routes/category.routes.js');
const userRoutes = require('./routes/user.routes.js');
const contactRoutes = require('./routes/contact.routes.js');
// const fileRoutes = require('./routes/filesaver.js');
const employeeRoutes = require('./routes/employee.routes.js');
const visitRoutes = require('./routes/visit.routes.js');



//routes config
app.use('/api/categories', categoryRoutes.routes());
app.use('/api/users', userRoutes.routes());
app.use('/api/contact', contactRoutes.routes());
app.use('/api/employees', employeeRoutes.routes());
app.use('/api/visits', visitRoutes.routes());


app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
