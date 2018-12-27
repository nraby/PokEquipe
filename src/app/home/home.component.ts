import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPokemons().subscribe(data => {
      this.pokemons = data
      console.log(this.pokemons)
    })
  }

}
