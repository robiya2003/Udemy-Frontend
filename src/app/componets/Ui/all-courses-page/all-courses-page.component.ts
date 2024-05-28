import { AfterViewInit, Component } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';

import { OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-all-courses-page',
  templateUrl: './all-courses-page.component.html',
  styleUrl: './all-courses-page.component.scss'
})
export class AllCoursesPageComponent implements AfterViewInit, OnInit {
  populartopiclistcurses!: any[]
  populartopicname!: any
  swiper!: any;
  btn1!: any;
  body1!: any;
  // category and topic
  categoryname!: any
  topicname!: any

  constructor(private categories: CategoryTopicPopularTopicService) { }
  // swipperni ishlatib beruvchi funksiya
  ngAfterViewInit(): void {
    console.log(Swiper);
    this.swiper = new Swiper('.mySwiper1', {
      // Swiper options
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    console.log(this.swiper)
  }
  // doimiy ishlab turish
  ngOnInit(): void {
    this.populartopicname = localStorage.getItem("PopularTopicName")
    this.categoryname = localStorage.getItem("categoryname")
    //console.log(this.categoryname+"constructor")
    this.topicname = localStorage.getItem("topicname")
    this.GetAllCoursesBypopulartopicname()
    this.ngAfterViewInit()
  }
  // Refresh uchun
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
  // populartopicga aynan tushadigan kurslar royhati
  GetAllCoursesBypopulartopicname() {
    this.categories.GetAllCoursesByPopulartopicName(this.populartopicname).subscribe({
      next: (data) => {
        this.populartopiclistcurses = data;
        console.log('coursesga keldiku iyaaaaaaaaaaaaaaaaaaaa')
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
    //var topic=localStorage.getItem("topicName")
  }
// GetCourseName(e: any){
//   var coursename: any
//     const p = e.target.children;
//     console.log(p[0])
//     if (p.length > 0) {
//       console.dir(p[0].textContent);
//       coursename = p[0].textContent;
//     } else {
//       console.log(e.target.parentNode.children[0].textContent)
//       coursename = e.target.parentNode.children[0].textContent;
//     }
//     // console.log(p.length)
//     localStorage.setItem("coursename", coursename)
// console.log(localStorage.getItem("coursename"))
// console.log("keldi")
// }
trackByCourseId(index: number, course: any): number {
  return course.id;
}

GetCourseName(event: MouseEvent): void {
  const targetElement = event.target as HTMLElement;
  let coursename: any
  if (targetElement.tagName === 'A') {
    coursename = targetElement.textContent || '';
  } else {
    const parentSlideInfo = targetElement.closest('.swiper-slide')?.children[1].querySelector('a')?.textContent;
    console.log(parentSlideInfo)
    coursename=parentSlideInfo;
    localStorage.setItem("coursename", coursename);
  }

  
  console.log("COURSENAME"+localStorage.getItem("coursename"));
  
}


}
