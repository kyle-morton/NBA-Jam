import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Favorite Players', cols: 2, rows: 1 },
    { title: 'Favorite Teams', cols: 1, rows: 1 },
    { title: 'Standings', cols: 1, rows: 2 },
    { title: 'Some other basketball stuff', cols: 1, rows: 1 }
  ];
}
