import { Component, OnInit } from '@angular/core';
import {NewsService} from 'src/app/news/services/news.service';
import {NewsTypeInterface} from 'src/app/news/types/news.type';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: NewsTypeInterface[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.newsService.getNews().subscribe((news) => {
      this.news = news;
    });
  }

}
