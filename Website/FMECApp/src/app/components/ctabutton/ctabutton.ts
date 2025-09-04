import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ctabutton',
  imports: [],
  templateUrl: './ctabutton.html',
  styleUrl: './ctabutton.css',
})
export class Ctabutton {
  @Input() link: string;
  @Input() type: string;
  @Input() logoclass: string;
  @Input() logo: string;
  @Input() text: string;

  constructor() {
    this.link = '';
    this.type = '';
    this.logoclass = '';
    this.logo = '';
    this.text = '';
  }
}
