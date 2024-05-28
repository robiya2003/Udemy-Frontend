import { Component } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../services/category-topic-popular-topic.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  categoryliststring!: any[]
  topicliststring!: any[]
  populartopicliststring!: any[]
  constructor(private categories: CategoryTopicPopularTopicService) { }
  ngOnInit(): void {
    this.GetAllUsers();
    // this.GetAllTopicsByCategoryNameFunc();
  }

  GetAllUsers() {
    this.categories.getAll().subscribe({
      next: (data) => {
        this.categoryliststring = data;

        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }

    })
    //var topic=localStorage.getItem("topicName")

    const section = (document.querySelector(".category_toggle") as HTMLElement);
    // console.log(section)
    section.style.display = section.style.display === "none" ? "flex" : "none";

  }
  GetAllTopicsByCategoryNameFunc(e: any) {
    var categoryname: any
    const p = e.target.children;
    if (p.length > 0) {
      console.dir(p[0].textContent);
      categoryname = p[0].textContent;
    } else {
      console.log(e.target.parentNode.children[0].textContent)
      categoryname = e.target.parentNode.children[0].textContent;
    }
    // console.log(p.length)
    localStorage.setItem("categoryname", categoryname)

    this.categories.GetAllTopicsByCategoryName(categoryname).subscribe({
      next: (data) => {
        this.topicliststring = data;

        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  GetAllPopularTopicssByTopicName(e: any) {
    var topicname: any
    const p = e.target.children;
    if (p.length > 0) {
      console.dir(p[0].textContent);
      topicname = p[0].textContent;
    } else {
      console.log(e.target.parentNode.children[0].textContent)
      topicname = e.target.parentNode.children[0].textContent;
    }
    localStorage.setItem("topicname", topicname)
    console.log(p)
    this.categories.GetAllPopularTopicsByTopicName(topicname).subscribe({
      next: (data) => {
        this.populartopicliststring = data;

        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  // popular topic
  GetPopularTopic(e: any) {
    var topicname: any
    const p = e.target.children;
    console.log(p[0])
    if (p.length > 0) {
      console.dir(p[0].textContent);
      topicname = p[0].textContent;
    } else {
      console.log(e.target.parentNode.children[0].textContent)
      topicname = e.target.parentNode.children[0].textContent;
    }
    localStorage.setItem("PopularTopicName", topicname)

    console.log(localStorage.getItem("PopularTopicName") + "locaasaaaaaaaaaaaaaaaaaaaaaaaaa")
  }

  myReload(){
    window.location.reload()
  }


}
