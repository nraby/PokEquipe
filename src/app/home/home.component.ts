import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons: any = [];

  constructor(private data: DataService) { }

  ngOnInit() {
  }
}
