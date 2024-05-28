import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryTopicPopularTopicService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl
  
  // Categorylarni List shaklida footerdan oldin chiqarish uchun
  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl+"Categories/GetAllCategory");
  }
  
// Categorylarni List shaklida navbarda chiqarish uchun
GetAllTopicsByCategoryName(categoryname:string): Observable<any> {
  return this.http.get<any>(this.baseUrl+`Categories/GetByCategoryTopic?name=${categoryname}`);
}
// Toopic name orqali populartopiclarni chiqarish

GetAllPopularTopicsByTopicName(topicname:string): Observable<any> {
  return this.http.get<any>(this.baseUrl+`Topic/GetByTopicNamePopularTopics?topicName=${topicname}`);
}

// PopularTopic/GetAllCoursesByPopularTopicName?name=populartopic1

GetAllCoursesByPopulartopicName(populartopicname:string): Observable<any> {
  return this.http.get<any>(this.baseUrl+`PopularTopic/GetAllCoursesByPopularTopicName?name=${populartopicname}`);
}
GetLessonsByCourse(coursename:string): Observable<any> {
  return this.http.get<any>(this.baseUrl+`Course/GetCourseLessons?name=${coursename}`);
}
// new uchun News/GetAllNews
GetAllNews(): Observable<any> {
  return this.http.get<any>(this.baseUrl+"News/GetAllNews");
}
GetByNameNews(newsname:string): Observable<any> {
  return this.http.get<any>(this.baseUrl+`News/GetById?id=${newsname}`);
}
GetAllAuthers(): Observable<any> {
  return this.http.get<any>(this.baseUrl+"Auther/GetAllAuther");
}

GetByIdLesson(id:string): Observable<any> {
  return this.http.get<any>(this.baseUrl+`Lesson/GetByIdLesson?Id=${id}`);
}
}