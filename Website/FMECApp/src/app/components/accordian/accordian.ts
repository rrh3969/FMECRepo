import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  imports: [],
  templateUrl: './accordian.html',
  styleUrl: './accordian.css'
})
export class Accordian {
  @Input() title: string;
  @Input() content: string;

  expand(event: {style: {display: string;};}) {
    if(event.style.display === "block") {
      event.style.display = "none";
    }
    else {
      event.style.display = "block";
    }
  }

  constructor() {
    this.title = '';
    this.content = '';
  }
}
