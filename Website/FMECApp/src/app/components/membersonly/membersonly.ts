import { Component } from '@angular/core';

@Component({
  selector: 'app-membersonly',
  imports: [],
  templateUrl: './membersonly.html',
  styleUrl: './membersonly.css'
})
export class Membersonly {
  checkpassword(event: {style: {display: string;}}, password: string) {
    if(password == 'test') {
      event.style.display = "block";
    }
  }
}
