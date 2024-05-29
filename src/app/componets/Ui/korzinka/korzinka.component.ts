import { Component, inject } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-korzinka',
  templateUrl: './korzinka.component.html',
  styleUrl: './korzinka.component.scss'
})
export class KorzinkaComponent {
  UserId:any
  userAllcourse!:any[]
  router = inject(Router);
   constructor(private services:CategoryTopicPopularTopicService) {}
   ngOnInit(): void {this.UserCourses()}
   UserCourses(){
    this.UserId=localStorage.getItem('UserId')
    if(this.UserId!=null){
      this.services.UserCourse(this.UserId).subscribe({
        next: (data) => {
          this.userAllcourse = data;
          console.log(data);
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


  GetCourseName(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    let coursename: any
    if (targetElement.tagName === 'A') {
      coursename = targetElement.textContent || '';
    } else {
      const parentSlideInfo = targetElement.parentElement?.parentElement?.children[1].children[0].textContent;
      console.log(targetElement.parentElement?.parentElement?.children[1].children[0].textContent)
      coursename=parentSlideInfo;
      localStorage.setItem("coursename", coursename);
    }
  
    
    console.log("COURSENAME"+localStorage.getItem("coursename"));
    
  }
}
