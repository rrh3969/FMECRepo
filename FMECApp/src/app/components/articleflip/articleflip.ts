import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articleflip',
  imports: [],
  templateUrl: './articleflip.html',
  styleUrl: './articleflip.css'
})
export class Articleflip {
  @Input() image: string;
  @Input() title: string;
  @Input() date: string;
  @Input() content: string;

  constructor() {
    this.image = '';
    this.title = '';
    this.date = '';
    this.content = '';
  }
}
