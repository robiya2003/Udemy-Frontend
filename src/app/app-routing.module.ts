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
  {path:"korzinka",title:"korzinka",component:KorzinkaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
