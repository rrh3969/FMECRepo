import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian',
  imports: [],
  templateUrl: './accordian.html',
  styleUrl: './accordian.css'
})
export class Accordian {
  expand(event: {style: {display: string;};}) {
    if(event.style.display === "block") {
      event.style.display = "none";
    }
    else {
      event.style.display = "block";
    }
  }
}
