import { Component } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  news!:any
  newsid!:any
  constructor(private categories: CategoryTopicPopularTopicService) { }
  ngOnInit(): void {this.GetNews()}


  GetNews() {
    this.newsid=localStorage.getItem("newsid")
    this.categories.GetByNameNews(this.newsid).subscribe({
      next: (data) => {
        this.news = data;
        console.log('coursesga keldiku iyaaaaaaaaaaaaaaaaaaaa')
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
    //var topic=localStorage.getItem("topicName")
  }
}
