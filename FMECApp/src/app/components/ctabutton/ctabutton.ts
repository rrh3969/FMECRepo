import { Component } from '@angular/core';

@Component({
  selector: 'app-ctabutton',
  imports: [],
  templateUrl: './ctabutton.html',
  styleUrl: './ctabutton.css'
})
export class Ctabutton {
  link: String;
  type: String;
  logo: String;
  logoclass: String;
  text: String;

  constructor(link: String, type: String, logo: String, logoclass: String, text: String) {
    this.link = link;
    this.type = type;
    this.logo = logo;
    this.logoclass = logoclass;
    this.text = text;
  }
}
