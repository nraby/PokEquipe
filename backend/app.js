const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Login = require('./database/user');

const logRoute = require('./routes/user');
const pokemonsRoute = require('./routes/pokemons')

const app = express();

//connect to mongoose db
mongoose.connect("mongodb+srv://admin:admin@pokequipe-aarmj.mongodb.net/Pokequipe?retryWrites=true")
   .then(() => {
      console.log("Connection successful");
   })
   .catch(() => {
      console.log("Failed to connect to db");
   });
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
//enable corse
app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
   next();
});
// authentifications routes
app.use("/api/user", logRoute);
app.use("/pokemons", pokemonsRoute)

module.exports = app;
