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
    // Category uchun pathlar
    {path:"categorycontrol",component:CategoryNavbarComponent,
          children:[
            {path:"categorycreate",component:CategoryCreateComponent},
            {path:"categoryupdate",component:CategoryUpdateComponent},
            {path:"categorydelete",component:CategoryDeleteComponent},
            {path:"categorygetall",component:CategoryGetAllComponent}
          ]}
  ]},
  // ,{path:"admincreate",component:AdminCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
