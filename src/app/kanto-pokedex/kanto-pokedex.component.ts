import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import {forkJoin} from 'rxjs'

@Component({
  selector: 'app-kanto-pokedex',
  templateUrl: './kanto-pokedex.component.html',
  styleUrls: ['./kanto-pokedex.component.scss']
})

export class KantoPokedexComponent implements OnInit {
  pokemons: any = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    
    forkJoin(
      Array(151).fill(0).map((_, i) => this.data.getPokemons(i + 1))
    )
    .subscribe(data => {
      this.pokemons = data;
      console.log(this.pokemons)
    });
  }

}
