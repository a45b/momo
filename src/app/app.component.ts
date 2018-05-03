import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fontSize: number;

  setFontSize(event: number) {    
    this.fontSize = event;
  }
}
