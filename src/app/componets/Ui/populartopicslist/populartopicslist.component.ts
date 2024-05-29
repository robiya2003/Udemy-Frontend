import { Component } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';

@Component({
  selector: 'app-populartopicslist',
  templateUrl: './populartopicslist.component.html',
  styleUrl: './populartopicslist.component.scss'
})
export class PopulartopicslistComponent {
  categoryliststring!: any[]
 
  populartopicliststring!:any[]

  // List uchun
  categoryname!:any
  topicname!:any
  populartopicname!:any
  constructor(private categories: CategoryTopicPopularTopicService) { }
  ngOnInit(): void {
   this.GetAllPopularTopics()
  }
  GetAllPopularTopics() {
    this.topicname=localStorage.getItem("topicname")
    this.categories.GetAllPopularTopicsByTopicName(this.topicname).subscribe({
      
      next: (data) => {
        this.populartopicliststring= data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
  })}


  GetPopularTopicName(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    let populartopicname: any
    if (targetElement.tagName === 'A') {
      populartopicname = targetElement.textContent || '';
    } else {
      populartopicname=targetElement.parentElement?.children[1].textContent
      console.log(populartopicname)
      localStorage.setItem("PopularTopicName", populartopicname);
      //this.GetAllTopics()
    } 
}

myReload(){
  window.location.reload()
}
}
