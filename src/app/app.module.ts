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
import { KorzinkaComponent } from './componets/Ui/korzinka/korzinka.component';
import { AdminCreateComponent } from './componets/Admin/AdminControl/admin-create/admin-create.component';
import { AdminUpdateComponent } from './componets/Admin/AdminControl/admin-update/admin-update.component';
import { AdminDeleteComponent } from './componets/Admin/AdminControl/admin-delete/admin-delete.component';
import { AdminGetAllComponent } from './componets/Admin/AdminControl/admin-get-all/admin-get-all.component';
import { AnswerCreateComponent } from './componets/Admin/Answer/answer-create/answer-create.component';
import { AnswerUpdateComponent } from './componets/Admin/Answer/answer-update/answer-update.component';
import { AnswerDeleteComponent } from './componets/Admin/Answer/answer-delete/answer-delete.component';
import { AnswerGetAllComponent } from './componets/Admin/Answer/answer-get-all/answer-get-all.component';
import { AutherCreateComponent } from './componets/Admin/Auther/auther-create/auther-create.component';
import { AutherUpdateComponent } from './componets/Admin/Auther/auther-update/auther-update.component';
import { AutherDeleteComponent } from './componets/Admin/Auther/auther-delete/auther-delete.component';
import { AutherGetAllComponent } from './componets/Admin/Auther/auther-get-all/auther-get-all.component';
import { CategoryCreateComponent } from './componets/Admin/Category/category-create/category-create.component';
import { CategoryUpdateComponent } from './componets/Admin/Category/category-update/category-update.component';
import { CategoryDeleteComponent } from './componets/Admin/Category/category-delete/category-delete.component';
import { CategoryGetAllComponent } from './componets/Admin/Category/category-get-all/category-get-all.component';
import { CourseCreateComponent } from './componets/Admin/Course/course-create/course-create.component';
import { CourseUpdateComponent } from './componets/Admin/Course/course-update/course-update.component';
import { CourseDeleteComponent } from './componets/Admin/Course/course-delete/course-delete.component';
import { CourseGetAllComponent } from './componets/Admin/Course/course-get-all/course-get-all.component';
import { LessonCreateComponent } from './componets/Admin/Lesson/lesson-create/lesson-create.component';
import { LessonUpdateComponent } from './componets/Admin/Lesson/lesson-update/lesson-update.component';
import { LessonDeleteComponent } from './componets/Admin/Lesson/lesson-delete/lesson-delete.component';
import { LessonGetAllComponent } from './componets/Admin/Lesson/lesson-get-all/lesson-get-all.component';
import { NewsCreateComponent } from './componets/Admin/News/news-create/news-create.component';
import { NewsUpdateComponent } from './componets/Admin/News/news-update/news-update.component';
import { NewsDeleteComponent } from './componets/Admin/News/news-delete/news-delete.component';
import { NewsGetAllComponent } from './componets/Admin/News/news-get-all/news-get-all.component';
import { PopularTopicCreateComponent } from './componets/Admin/PopularTopic/popular-topic-create/popular-topic-create.component';
import { PopularTopicUpdateComponent } from './componets/Admin/PopularTopic/popular-topic-update/popular-topic-update.component';
import { PopularTopicDeleteComponent } from './componets/Admin/PopularTopic/popular-topic-delete/popular-topic-delete.component';
import { PopularTopicGetAllComponent } from './componets/Admin/PopularTopic/popular-topic-get-all/popular-topic-get-all.component';
import { TopicCreateComponent } from './componets/Admin/Topic/topic-create/topic-create.component';
import { TopicUpdateComponent } from './componets/Admin/Topic/topic-update/topic-update.component';
import { TopicDeleteComponent } from './componets/Admin/Topic/topic-delete/topic-delete.component';
import { TopicGetAllComponent } from './componets/Admin/Topic/topic-get-all/topic-get-all.component';
import { UserCreateComponent } from './componets/Admin/UserControl/user-create/user-create.component';
import { UserUpdateComponent } from './componets/Admin/UserControl/user-update/user-update.component';
import { UserDeleteComponent } from './componets/Admin/UserControl/user-delete/user-delete.component';
import { UsergetAllComponent } from './componets/Admin/UserControl/userget-all/userget-all.component';
import { AdminPanelNavbarComponent } from './componets/Admin/admin-panel-navbar/admin-panel-navbar.component';
import { AdminControlNavbarComponent } from './componets/Admin/AdminControl/admin-control-navbar/admin-control-navbar.component';
import { CategoryNavbarComponent } from './componets/Admin/Category/category-navbar/category-navbar.component';
import { FormsModule } from '@angular/forms';
import { TopicNavbarComponent } from './componets/Admin/Topic/topic-navbar/topic-navbar.component';
import { PopularTopicNavbarComponent } from './componets/Admin/PopularTopic/popular-topic-navbar/popular-topic-navbar.component';
import { AutherNavbarComponent } from './componets/Admin/Auther/auther-navbar/auther-navbar.component';
import { CourseNavbarComponent } from './componets/Admin/Course/course-navbar/course-navbar.component';
import { LessonNavbarComponent } from './componets/Admin/Lesson/lesson-navbar/lesson-navbar.component';
import { AnswerNavbarComponent } from './componets/Admin/Answer/answer-navbar/answer-navbar.component';
import { NewsNavbarComponent } from './componets/Admin/News/news-navbar/news-navbar.component';

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
    KorzinkaComponent,
    AdminCreateComponent,
    AdminUpdateComponent,
    AdminDeleteComponent,
    AdminGetAllComponent,
    AnswerCreateComponent,
    AnswerUpdateComponent,
    AnswerDeleteComponent,
    AnswerGetAllComponent,
    AutherCreateComponent,
    AutherUpdateComponent,
    AutherDeleteComponent,
    AutherGetAllComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    CategoryDeleteComponent,
    CategoryGetAllComponent,
    CourseCreateComponent,
    CourseUpdateComponent,
    CourseDeleteComponent,
    CourseGetAllComponent,
    LessonCreateComponent,
    LessonUpdateComponent,
    LessonDeleteComponent,
    LessonGetAllComponent,
    NewsCreateComponent,
    NewsUpdateComponent,
    NewsDeleteComponent,
    NewsGetAllComponent,
    PopularTopicCreateComponent,
    PopularTopicUpdateComponent,
    PopularTopicDeleteComponent,
    PopularTopicGetAllComponent,
    TopicCreateComponent,
    TopicUpdateComponent,
    TopicDeleteComponent,
    TopicGetAllComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UsergetAllComponent,
    AdminPanelNavbarComponent,
    AdminControlNavbarComponent,
    CategoryNavbarComponent,
    TopicNavbarComponent,
    PopularTopicNavbarComponent,
    AutherNavbarComponent,
    CourseNavbarComponent,
    LessonNavbarComponent,
    AnswerNavbarComponent,
    NewsNavbarComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
     FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
