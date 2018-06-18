import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../../modules/nba/services/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  constructor(private standingsService : StandingsService) { }

  ngOnInit() {
    this.standingsService.GetStandingsByYear('2017-2018')
    .subscribe((standings) => {
      // console.log('standings: ' + JSON.stringify(standings));
    });
  }

}
