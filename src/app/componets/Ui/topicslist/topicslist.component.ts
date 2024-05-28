import { Component } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';

@Component({
  selector: 'app-topicslist',
  templateUrl: './topicslist.component.html',
  styleUrl: './topicslist.component.scss'
})
export class TopicslistComponent {
  topicliststring!:any[]
  topicname!:any
  categoryliststring!: any[]
 
  populartopicliststring!:any[]

  // List uchun
  categoryname!:any
 
  constructor(private categories: CategoryTopicPopularTopicService) { }
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
