import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPokemonsByID(id) {
    return this.http.get('http://localhost:8080/pokemons/'+id);
  }

  getAllPokemons(){
    return this.http.get('http://localhost:8080/pokemons/');
  }
  getTest(){
    return this.http.get('http://localhost:8080/pokemons/');
  }
}
