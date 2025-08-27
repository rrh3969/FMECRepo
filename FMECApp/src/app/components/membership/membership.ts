import { Component } from '@angular/core';
import { Joinbutton } from '../joinbutton/joinbutton';
import { Accordian } from '../accordian/accordian';

@Component({
  selector: 'app-membership',
  imports: [Joinbutton, Accordian],
  templateUrl: './membership.html',
  styleUrl: './membership.css',
})
export class Membership {

}
