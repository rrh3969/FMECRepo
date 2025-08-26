import { Component } from '@angular/core';
import { Article } from '../article/article';

@Component({
  selector: 'app-news',
  imports: [Article],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {

}
