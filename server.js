const express = require("express");
const jwt = require('jsonwebtoken');
const db = require("./app/models");

const app = express();

db.sequelize.sync();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/api', (req, res) => {
    res.json({
      message: 'Welcome to the API'
    });
});
  
// routes
require('./app/routes/auth')(app);
require('./app/routes/user')(app);


// set port listen for requests
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});