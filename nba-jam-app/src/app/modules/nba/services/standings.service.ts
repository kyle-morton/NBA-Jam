import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/modules/data/services/api.service';


@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private apiService : ApiService) { }

  public GetStandingsByYear(year: string) { //pass in enum of year

    
    return this.apiService.Get(year + environment.api.team_standings) 
    .pipe(map(json => {
      return json;
    }));

  }

}
