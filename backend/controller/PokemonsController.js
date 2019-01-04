module.exports = class PokemonsController {
    constructor() {
      this.url = 'https://pokeapi.co/api/v2/pokemon/';

  }

  getPokemonById(id) {
    return this.http.get('url' + id +'/')
  }

}