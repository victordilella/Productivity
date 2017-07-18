import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  singleDayData: SingleDayData = {
    hoursCoding : 1
  };
}

export class SingleDayData {
  hoursCoding: number;
}
