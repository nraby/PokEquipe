
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

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

http.createServer(function(req, res) {

    res.writeHead(200);
  
    res.end('Salut tout le monde !');
  
  });
  
app.listen(8080);

app.use(cors());
app.use(bodyParser.json());
app.use('/users', require('./users'));
app.use('/pokemons', require('./pokemons'));
