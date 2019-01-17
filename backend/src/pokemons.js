const express = require('express');
const router = express.Router();
const pokeController = require('./controller/pokeController');


router.get('/', async function(req, res) {
  await res.header('Content-Type', 'application/json');
  await res.write(JSON.stringify(await (new pokeController()).getAllPokemons()));
  await res.end();
});

router.get('/:id', async function(req, res) {
    await res.header('Content-Type', 'application/json');
    await res.write(JSON.stringify(await (new pokeController()).getPokemonById(req.params.id)));
    await res.end();
  });

module.exports = router;