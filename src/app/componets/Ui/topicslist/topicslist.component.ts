import { AfterViewInit, Component } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-topicslist',
  templateUrl: './topicslist.component.html',
  styleUrl: './topicslist.component.scss'
})
export class TopicslistComponent implements AfterViewInit
{
  topicliststring!:any[]
  topicname!:any
  categoryliststring!: any[]
 swiper:any
  populartopicliststring!:any[]

  // List uchun
  categoryname!:any
 
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
  
 

  
  ngOnInit(): void {this.GetAllTopics()}
  GetAllTopics() {
    this.categoryname=localStorage.getItem("categoryname")
    this.categories.GetAllTopicsByCategoryName(this.categoryname).subscribe({
      
      next: (data) => {
        this.topicliststring = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
  })}

  GetTopicName(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    let topicnameforlist: any
    if (targetElement.tagName === 'A') {
      topicnameforlist = targetElement.textContent || '';
    } else {
      topicnameforlist=targetElement.parentElement?.children[1].textContent
      console.log(topicnameforlist)
      localStorage.setItem("topicname", topicnameforlist);
      //this.GetAllTopics()
    } 
}
}
