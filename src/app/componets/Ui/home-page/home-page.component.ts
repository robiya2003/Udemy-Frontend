import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';
declare var Swiper: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit, OnInit{
  swiper!: any;
  swiper2!:any
 newslist!:any[];
 newsid!:any
 autherlist!:any[]

  ngOnInit(): void { this.GetAllUsers() ; this.GetAllAuthersList()}
  ngAfterViewInit(): void {
    console.log(Swiper);
    this.swiper = new Swiper('.mySwiper', {
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
    this.swiper = new Swiper('.mySwiper3', {
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
    this.swiper = new Swiper('.mySwiper2', {
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
  constructor(private categories: CategoryTopicPopularTopicService) { }
  GetAllUsers() {
    this.categories.GetAllNews().subscribe({
      next: (data) => {
        this.newslist = data;
        
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }

    })
  }
  GetByNewsId(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    let coursename: any
    if (targetElement.tagName === 'A') {
      coursename = targetElement.textContent || '';
    } else {
      console.log(targetElement.parentElement?.children[0].textContent)
      this.newsid=targetElement.parentElement?.children[0].textContent
      localStorage.setItem("newsid",this.newsid)
      
    }
  }


  GetAllAuthersList() {
    this.categories.GetAllAuthers().subscribe({
      next: (data) => {
        this.autherlist = data;
        
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }

    })
  }
}
