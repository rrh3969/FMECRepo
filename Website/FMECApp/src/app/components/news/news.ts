import { Component } from '@angular/core';
import { Article } from '../article/article';
import { Articleflip } from '../articleflip/articleflip';

@Component({
  selector: 'app-news',
  imports: [Article, Articleflip],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {
  article1 = {
    image: '/arrival.jpg',
    title: 'New Arrival',
    date: 'October 27th 2024',
    content: 'A new piece of history arrived at the Exhibit Center today. Mr. Paul Lawton (North Collins VFC) met with President Makin to loan us quite the historical artifact. This marvel of firefighting ingenuity was manufactured somewhere around 1875 by members of what would become the North Collins Volunteer Fire Company. This hand-pumper actually predates the department, which was established in 1889 as the "North Collins Fire Protection".<br><br>The piece consists of a handmade "hay wagon" and features a Rumsey & Company (Seneca Falls, NY) two-cylinder stationary type pump. The wagon also includes foldable decks for the firefighters to stand on and pump. When this unit was pumped by six to eight firefighters, the hose stream could reach the top of a three story house.<br><br>This cart was donated to the FASNY Museum of Firefighting in the 1950s where it remained on display until 2023. We are excited to display this amazing piece of Western New York firefighting history. Stop in and see it any Saturday from 9-3.',
  }
}
