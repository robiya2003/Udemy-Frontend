import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/Ui/navbar/navbar.component';
import { FooterComponent } from './componets/Ui/footer/footer.component';
import { RegistrComponent } from './componets/Auth/registr/registr.component';
import { LogInComponent } from './componets/Auth/log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule } from '@angular/router';
import { AllCoursesPageComponent } from './componets/Ui/all-courses-page/all-courses-page.component';
import { LessonPageComponent } from './componets/Ui/lesson-page/lesson-page.component';
import { CoursesLessonsPageComponent } from './componets/Ui/courses-lessons-page/courses-lessons-page.component';
import { CourseslistComponent } from './componets/Ui/courseslist/courseslist.component';
import { TopicslistComponent } from './componets/Ui/topicslist/topicslist.component';
import { PopulartopicslistComponent } from './componets/Ui/populartopicslist/populartopicslist.component';
import { HomePageComponent } from './componets/Ui/home-page/home-page.component';
import { NewsPageComponent } from './componets/Ui/news-page/news-page.component';

/* styles.css or styles.scss */
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistrComponent,
    LogInComponent,
    AllCoursesPageComponent,
    LessonPageComponent,
    CoursesLessonsPageComponent,
    CourseslistComponent,
    TopicslistComponent,
    PopulartopicslistComponent,
    HomePageComponent,
    NewsPageComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
