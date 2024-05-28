import { AfterViewInit, Component } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';
declare var Swiper: any;
@Component({
  selector: 'app-courseslist',
  templateUrl: './courseslist.component.html',
  styleUrl: './courseslist.component.scss'
})
export class CourseslistComponent implements AfterViewInit{
  categoryliststring!: any[]
  swiper!: any;
  populartopicliststring!:any[]
  // List uchun
  categoryname!:any
  topicname!:any
  constructor(private categories: CategoryTopicPopularTopicService) { }
  
  ngAfterViewInit(): void {
    this.swiper = new Swiper('.mySwiper5', {
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
  }
  
  ngOnInit(): void {
    this.GetAllCaregories();}

  GetAllCaregories() {
    this.categories.getAll().subscribe({
      next: (data) => {
        this.categoryliststring = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
  })}
    
  GetCategoryName(event: MouseEvent): void {
      const targetElement = event.target as HTMLElement;
      let categorynameforlist: any
      if (targetElement.tagName === 'A') {
        categorynameforlist = targetElement.textContent || '';
      } else {
        categorynameforlist=targetElement.parentElement?.children[1].textContent
        console.log(categorynameforlist)
        localStorage.setItem("categoryname", categorynameforlist);
        //this.GetAllTopics()
      } 
  }  
}
