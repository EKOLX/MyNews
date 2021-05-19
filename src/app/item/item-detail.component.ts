import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { News } from '../models/news';

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  news: News;

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.news = this.newsService.getNewsBy(id);
  }

}
