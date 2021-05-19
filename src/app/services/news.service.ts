import { Injectable } from '@angular/core';
import { Http } from '@nativescript/core';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private newsCount: number = 10;
  private news: News[];

  getNews(): Promise<string> {
    return Http.getString(`https://www.haultail.com/wp-json/haultail_news/v1/posts/${this.newsCount}/0`);
  }

  setNews(news: News[]): void {
    this.news = news;
  }

  getNewsBy(id: number): News {
    return this.news.filter((news) => news.post_ID === id)[0];
  }

}
