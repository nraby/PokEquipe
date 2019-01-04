const express=require('express');
const router = express.Router();
const PokemonsController = require('../controller/PokemonsController');

router.get('/', async function(req, res) {
  await res.header('Content-Type', 'application/json');
  await res.write(JSON.stringify(await (new PokemonsController)))
  await res.end();
});
router.get('/:id', async function(req, res) {
  await res.header('Content-Type', 'application/json');
  await res.write(JSON.stringify(await (new PokemonsController()).getPokemonById(req.params.id)));
  await res.end();
});