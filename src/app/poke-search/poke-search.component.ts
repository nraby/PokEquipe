import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../_services/data.service';
import {forkJoin} from 'rxjs'
@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  name = new FormControl('');
  pokemon : any;


  constructor(private data: DataService) {
}
    
  ngOnInit() {
  }
  updateName() {
    //console.log(this.name);
    forkJoin(
      Array(1).fill(0).map((_, i) => this.data.getPokemonsByID(this.name.value))
    )
    .subscribe(data => {
      this.pokemon = data;
      console.log(this.pokemon)
    });
  }
}
