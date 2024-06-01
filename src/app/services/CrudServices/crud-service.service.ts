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
  // Answer
  AnswerGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Answer/GetAllAnswer");
  }
  // Auther
 AutherGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Auther/GetAllAuther");
  }
  // Course
  CourseGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Course/GetAllCouses");
  }
  // Lesson

  LessonGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Lesson/GetAllLessons");
  }
  // News
  NewsGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"News/GetAllNews");
  }
  // Popular Topic
  PopularTopicGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"PopularTopic/GetAllPopularTopic");
  }

}
