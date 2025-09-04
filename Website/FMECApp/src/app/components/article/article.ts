import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {
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
