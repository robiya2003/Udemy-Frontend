import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './componets/Auth/log-in/log-in.component';
import { RegistrComponent } from './componets/Auth/registr/registr.component';
import { AllCoursesPageComponent } from './componets/Ui/all-courses-page/all-courses-page.component';
import { CoursesLessonsPageComponent } from './componets/Ui/courses-lessons-page/courses-lessons-page.component';
import { TopicslistComponent } from './componets/Ui/topicslist/topicslist.component';
import { AppComponent } from './app.component';
import { PopulartopicslistComponent } from './componets/Ui/populartopicslist/populartopicslist.component';
import { HomePageComponent } from './componets/Ui/home-page/home-page.component';
import { NewsPageComponent } from './componets/Ui/news-page/news-page.component';
import { LessonPageComponent } from './componets/Ui/lesson-page/lesson-page.component';
import { authGuard } from './guards/user-guard.guard';
import { KorzinkaComponent } from './componets/Ui/korzinka/korzinka.component';
import { AdminPanelNavbarComponent } from './componets/Admin/admin-panel-navbar/admin-panel-navbar.component';
import { AdminCreateComponent } from './componets/Admin/AdminControl/admin-create/admin-create.component';
import { AdminUpdateComponent } from './componets/Admin/AdminControl/admin-update/admin-update.component';
import { AdminControlNavbarComponent } from './componets/Admin/AdminControl/admin-control-navbar/admin-control-navbar.component';
import { CategoryNavbarComponent } from './componets/Admin/Category/category-navbar/category-navbar.component';
import { CategoryCreateComponent } from './componets/Admin/Category/category-create/category-create.component';
import { CategoryUpdateComponent } from './componets/Admin/Category/category-update/category-update.component';
import { CategoryDeleteComponent } from './componets/Admin/Category/category-delete/category-delete.component';
import { CategoryGetAllComponent } from './componets/Admin/Category/category-get-all/category-get-all.component';
import { TopicNavbarComponent } from './componets/Admin/Topic/topic-navbar/topic-navbar.component';
import { TopicCreateComponent } from './componets/Admin/Topic/topic-create/topic-create.component';
import { TopicUpdateComponent } from './componets/Admin/Topic/topic-update/topic-update.component';
import { TopicDeleteComponent } from './componets/Admin/Topic/topic-delete/topic-delete.component';
import { TopicGetAllComponent } from './componets/Admin/Topic/topic-get-all/topic-get-all.component';
import { PopularTopicNavbarComponent } from './componets/Admin/PopularTopic/popular-topic-navbar/popular-topic-navbar.component';
import { PopularTopicCreateComponent } from './componets/Admin/PopularTopic/popular-topic-create/popular-topic-create.component';
import { PopularTopicUpdateComponent } from './componets/Admin/PopularTopic/popular-topic-update/popular-topic-update.component';
import { PopularTopicDeleteComponent } from './componets/Admin/PopularTopic/popular-topic-delete/popular-topic-delete.component';
import { PopularTopicGetAllComponent } from './componets/Admin/PopularTopic/popular-topic-get-all/popular-topic-get-all.component';
//canActivate:[authGuard]
const routes: Routes = [
  {path:'',title:'',component:HomePageComponent},
  { path: "login", title: "login", component: LogInComponent},
  { path: "register", title: "register", component: RegistrComponent},
  {path:"allcourses",title:"allcourses",component:AllCoursesPageComponent},
  {path:"courselessons",title:"courselessons",component:CoursesLessonsPageComponent},
  {path:"topicslist",title:"topicslist",component:TopicslistComponent},
  {path:"populartopicslist",title:"populartopicslist",component:PopulartopicslistComponent},
  {path:"courses",title:"courses",component:AllCoursesPageComponent},
  {path:"news",title:"news",component:NewsPageComponent},
  {path:"lesson",title:"lesson",component:LessonPageComponent},
  {path:"korzinka",title:"korzinka",component:KorzinkaComponent},
  // Admin uchun
  {path:"Admin",title:"Admin",component:AdminPanelNavbarComponent
  ,children:[
    {path:"admincontrol",component:AdminControlNavbarComponent,children:[
          {path:"admincreate",component:AdminCreateComponent} ,
    ]},
          // Category uchun pathlar tugadi ura
          {path:"categorycontrol",component:CategoryNavbarComponent,
               children:[
                  {path:"categorycreate",component:CategoryCreateComponent},
                  {path:"categoryupdate",component:CategoryUpdateComponent},
                  {path:"categorydelete",component:CategoryDeleteComponent},
                  {path:"categorygetall",component:CategoryGetAllComponent}
          ]},
           // Topic Uchun
          {path:"topiccontrol",component:TopicNavbarComponent,
               children:[
                    {path:"topiccreate",component:TopicCreateComponent},
                    {path:"topicupdate",component:TopicUpdateComponent},
                    {path:"topicdelete",component:TopicDeleteComponent},
                    {path:"topicgetall",component:TopicGetAllComponent}
          ]},
          // PopularTopic
          {path:"populartopiccontrol",component:PopularTopicNavbarComponent,
          children:[
                {path:"populartopiccreate",component:PopularTopicCreateComponent},
                {path:"populartopicupdate",component:PopularTopicUpdateComponent},
                {path:"populartopicdelete",component:PopularTopicDeleteComponent},
                {path:"populartopicgetall",component:PopularTopicGetAllComponent}]},
          // 
  ]},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
