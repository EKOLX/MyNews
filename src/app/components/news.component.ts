import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../models/news';

@Component({
  selector: 'ns-items',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  news: Array<News>;

  constructor(private itemService: NewsService) { }

  ngOnInit(): void {
    this.itemService.getNews().then((result: string) => {
      this.news = JSON.parse(result);
      this.itemService.setNews(this.news);
    }, error => console.error(error));
  }

}
