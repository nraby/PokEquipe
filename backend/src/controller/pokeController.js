const fetch = require('node-fetch');

module.exports = class pokeController {
    constructor() {
      this.url = 'https://pokeapi.co/api/v2/pokemon/';
    }
    async getPokemonById(id){
        const res = await fetch(this.url+id+'/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        });
        const json = await res.json();
        console.log(json);
        return json;
    }


}