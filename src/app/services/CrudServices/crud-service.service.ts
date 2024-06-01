import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  baseurl:string="https://localhost:7030/api/";
  constructor(private http:HttpClient) { }

 // Category
  CategoryCreate(data: any): Observable<any> {
    const formData = new FormData();
    formData.append('Name', data.Name);
    formData.append('Description', data.Description);
    formData.append('imagefile', data.imagefile, data.imagefile.name);

    return this.http.post<any>(`${this.baseurl}Categories/CreateCategory`, formData);
  }
  CategoryGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Categories/GetAllCategory");
  }
  CategoryUpdate(id: any, data: any): Observable<any> {
    const formData = new FormData();
    console.log(id)
    console.log(data)
    formData.append('Id', id);
    formData.append('Name', data.Name);
    formData.append('Description', data.Description);
    formData.append('imagefile', data.imagefile, data.imagefile.name);
    return this.http.put<any>(this.baseurl + `Categories/UpdateCategory`, formData)
  }
  CategoryDelete(id: any): Observable<any> {
    return this.http.delete<any>(this.baseurl + `Categories/DeleteCateory?id=${id}`)
  }
  CategoryGetById(id:number): Observable<any> {
    return this.http.get<any>(this.baseurl+`Categories/GetByIdCategory?id=${id}`);
  }
  // Topic
  TopicGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Topic/GetAllTopics");
  }
  TopicCreate(data: any): Observable<any> {
    const formData = new FormData();
    formData.append('CategoryId', data.CategoryId);
    formData.append('Name', data.Name);
    formData.append('Description', data.Description);
    formData.append('imagefile', data.imagefile, data.imagefile.name);

    return this.http.post<any>(`${this.baseurl}Topic/CreateTopic`, formData);
  }
  // Answer
  AnswerGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Answer/GetAllAnswer");
  }
  AnswerCreate(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}Answer/CreateAnswer`, data);
  }
  // Auther
 AutherGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Auther/GetAllAuther");
  }
  AutherCreate(data: any): Observable<any> {
    const formData = new FormData();
    formData.append('FullName', data.FullName);
    formData.append('Exprince', data.Exprince);
    formData.append('About', data.About);
    formData.append('Gmail', data.Gmail);
    formData.append('imagefile', data.imagefile, data.imagefile.name);

    return this.http.post<any>(`${this.baseurl}Auther/CreateAuther`, formData);
  }
  // Course
  CourseGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Course/GetAllCouses");
  }
  CourseCreate(data: any): Observable<any> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('AutherId', data.AutherId);
    formData.append('PopularTopicId', data.PopularTopicId);
    formData.append('imagefile', data.imagefile, data.imagefile.name);

    return this.http.post<any>(`${this.baseurl}Course/CreateCourse`, formData);
  }
  // Lesson
  LessonGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Lesson/GetAllLessons");
  }
  LessonCreate(data: any): Observable<any> {
    const formData = new FormData();
    formData.append('CourseId', data.CourseId);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('imagefile', data.imagefile, data.imagefile.name);
    formData.append('videofile', data.videofile, data.videofile.name);

    return this.http.post<any>(`${this.baseurl}Lesson/CreateLesson`, formData);
  }
  // News
  NewsGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"News/GetAllNews");
  }
  NewsCreate(data: any): Observable<any> {
    const formData = new FormData();
    formData.append('PopularTopicId', data.PopularTopicId);
    formData.append('Title', data.Title);
    formData.append('About', data.About);
    formData.append('imagefile', data.imagefile, data.imagefile.name);

    return this.http.post<any>(`${this.baseurl}News/CreateNews`, formData);
  }
  // Popular Topic
  PopularTopicGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"PopularTopic/GetAllPopularTopic");
  }
  PopularTopicCreate(data: any): Observable<any> {
    const formData = new FormData();
    formData.append('TopicId', data.TopicId);
    formData.append('Name', data.Name);
    formData.append('Description', data.Description);
    formData.append('imagefile', data.imagefile, data.imagefile.name);

    return this.http.post<any>(`${this.baseurl}PopularTopic/CreatePopularTopic`, formData);
  }
}
