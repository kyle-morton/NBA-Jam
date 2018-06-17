import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsService } from './services/standings.service';
import { PlayersService } from './services/players.service';
import { DataModule } from 'src/app/modules/data/data.module';

@NgModule({
  imports: [
    CommonModule,
    DataModule
  ],
  declarations: []
})
export class NbaModule { }
