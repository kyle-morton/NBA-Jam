import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/modules/nba/services/players.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public click() {
    console.log('clicked...');
  }

}
