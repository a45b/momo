import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  defaultFontSize: number = 10;

  @Output() fontEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementFontSize() {    
    this.defaultFontSize = this.defaultFontSize + 1;
    this.emitFontSize();
  }

  decrementFontSize() {
    this.defaultFontSize = this.defaultFontSize - 1;
    this.emitFontSize();
  }

  resetFontSize() {
    this.defaultFontSize = 10;
    this.emitFontSize();
  }

  emitFontSize() {
    this.fontEvent.emit(this.defaultFontSize);
  }

}
