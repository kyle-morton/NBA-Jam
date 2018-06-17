import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/modules/nba/services/players.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private playerService : PlayersService) { }

  ngOnInit() {

    this.playerService.GetPlayersByYear('2017-2018', '?player=james')
    .subscribe((players) => {
      console.log('players: ' + JSON.stringify(players));
    });
  }

}
