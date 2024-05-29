import { Component, OnInit, inject } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-lessons-page',
  templateUrl: './courses-lessons-page.component.html',
  styleUrl: './courses-lessons-page.component.scss'
})
export class CoursesLessonsPageComponent implements OnInit {
 coursename!:any 
 category!:any
 topicname!:any
 populartopicname!:any
 courselessons!:any
 courseslist!:any
 lessonId!:any
 // Bu course
 UserId:any
 router = inject(Router);
  constructor(private services:CategoryTopicPopularTopicService) {this.GetAllLessonsByCourse()}
  ngOnInit(): void {
    this.coursename=localStorage.getItem("coursename")
  
      this.coursename=localStorage.getItem("coursename")
      this.category=localStorage.getItem("categoryname")
      this.topicname=localStorage.getItem("topicname")
      this.populartopicname=localStorage.getItem("PopularTopicName")
      this.GetAllLessonsByCourse()
  }

  GetAllLessonsByCourse(){
    this.coursename=localStorage.getItem("coursename")
      this.category=localStorage.getItem("categoryname")
      this.topicname=localStorage.getItem("topicname")
      this.populartopicname=localStorage.getItem("PopularTopicName")
    console.log("iya"+this.coursename)
    this.services.GetLessonsByCourse(this.coursename).subscribe({
      next: (data) => {
        this.courselessons = data;
        console.log('COURSEeeeeeeeeeeeeeeeeee')
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })


    this.services.GetAllCoursesByPopulartopicName(this.populartopicname).subscribe({
      next: (data) => {
        this.courseslist = data;
        console.log('COURSE')
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  // myReload(){
  //   window.location.reload()
  // }
  collapse(e: any) {
    // const body1 = (document.querySelector("#panelsStayOpen-collapseOne") as HTMLElement);

    console.log(e.target.parentNode.nextSibling)
    const body1 = e.target.parentNode.nextSibling as HTMLElement

    if (!body1.classList.contains("show")) {
      body1.classList.add("show");
    } else {
      body1.classList.remove("show");
    }
    console.log(body1.classList.contains("show"))
  }

  GetByLessonId(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
      console.log(targetElement.parentElement?.children[0].textContent)
      this.lessonId = targetElement.parentElement?.children[0].textContent
    localStorage.setItem("lessonid",this.lessonId)
  }
  BuyCourse(){
    this.UserId=localStorage.getItem('UserId')
    console.log('Buy coursega kelid')
    if(this.UserId!=null){
      console.log(this.UserId)
      console.log(this.courselessons.id)
      this.services.GetByCourse(this.courselessons.id,this.UserId).subscribe({
        next: (data) => {
          // this.courselessons = data;
          console.log(data);
          alert("sotib oldingiz!")
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    else{
      this.router.navigate(['/login']);
    }

  }
}
