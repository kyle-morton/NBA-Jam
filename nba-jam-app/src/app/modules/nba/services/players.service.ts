import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/modules/data/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private apiService : ApiService) { }

  public GetPlayersByYear(year: string, query: string) { //pass in enum of year

    var url = year + environment.api.active_players;
    if (query)
      url += query;

    return this.apiService.Get(url) 
    .pipe(map(json => {
      return json;
    }));

  }

}
