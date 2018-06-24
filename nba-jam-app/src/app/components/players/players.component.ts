import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/modules/nba/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playerName : string;

  constructor(private playerService : PlayersService) { }

  ngOnInit() {
  }

  public search() {
    console.log('player: ' + this.playerName);
    // this.playerService.GetPlayersByYear('2017-2018', '?player=james')
    // .subscribe((players) => {
    //   // console.log('players: ' + JSON.stringify(players));
    // });
  }


}
