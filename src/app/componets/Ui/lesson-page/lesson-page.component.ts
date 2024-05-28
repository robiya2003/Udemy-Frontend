import { Component } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrl: './lesson-page.component.scss'
})
export class LessonPageComponent {
  lessons!:any
  lessonsid!:any
  constructor(private categories: CategoryTopicPopularTopicService) { }
  ngOnInit(): void {this.GetLesson()}


  GetLesson() {
    this.lessonsid=localStorage.getItem("lessonid")
    console.log(this.lessonsid)
    this.categories.GetByIdLesson(this.lessonsid).subscribe({
      next: (data) => {
        this.lessons = data;
        console.log('lessonni oldik')
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
    //var topic=localStorage.getItem("topicName")
  }
}
