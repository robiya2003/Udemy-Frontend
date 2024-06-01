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
  TopicGetById(id:number): Observable<any> {
    return this.http.get<any>(this.baseurl+`Topic/GetByIdTopic?id=${id}`);
  }
  TopicUpdate(id: any, data: any): Observable<any> {
    const formData = new FormData();
    console.log(id)
    console.log(data)
    formData.append('Id', id);
    formData.append('CategoryId', data.CategoryId);
    formData.append('Name', data.Name);
    formData.append('Description', data.Description);
    formData.append('imagefile', data.imagefile, data.imagefile.name);

    return this.http.put<any>(this.baseurl + `Topic/UpdateTopic`, formData)
  }
  TopicDelete(id: any): Observable<any> {
    return this.http.delete<any>(this.baseurl + `Topic/DeleteTopic?id=${id}`)
  }


  // Answer
  AnswerGetAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+"Answer/GetAllAnswer");
  }
  AnswerCreate(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}Answer/CreateAnswer`, data);
  }
  AnswerGetById(id:number): Observable<any> {
    return this.http.get<any>(this.baseurl+`Answer/GetByIdAnswer?id=${id}`);
  }
  AnswerUpdate(data: any): Observable<any> {
    
    return this.http.put<any>(this.baseurl + `Answer/UpdateAnswer`, data)
  }
  AnswerDelete(id: any): Observable<any> {
    return this.http.delete<any>(this.baseurl + `Answer/DeleteAnswer?id=${id}`)
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
  AutherGetById(id:number): Observable<any> {
    return this.http.get<any>(this.baseurl+`Auther/GetByIdAuther?id=${id}`);
  }
  AutherUpdate(id: any, data: any): Observable<any> {
    const formData = new FormData();
    console.log(id)
    console.log(data)
    formData.append('Id', id);
    formData.append('FullName', data.FullName);
    formData.append('Exprince', data.Exprince);
    formData.append('About', data.About);
    formData.append('Gmail', data.Gmail);
    formData.append('imagefile', data.imagefile, data.imagefile.name);
    console.log(formData)
    return this.http.put<any>(this.baseurl + `Auther/UpdateAuther`, formData)
  }
  AutherDelete(id: any): Observable<any> {
    return this.http.delete<any>(this.baseurl + `Auther/DeleteAuther?id=${id}`)
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
  CourseGetById(id:number): Observable<any> {
    return this.http.get<any>(this.baseurl+`Course/GetByIdCourse?courseId=${id}`);
  }
  CourseUpdate(id: any, data: any): Observable<any> {
    const formData = new FormData();
    console.log(id)
    console.log(data)
    formData.append('Id', id);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('AutherId', data.AutherId);
    formData.append('PopularTopicId', data.PopularTopicId);
    formData.append('imagefile', data.imagefile, data.imagefile.name);
    return this.http.put<any>(this.baseurl + `Course/UpdateCourse`, formData)
  }
  CourseDelete(id: any): Observable<any> {
    return this.http.delete<any>(this.baseurl + `Course/DeleteCourse?id=${id}`)
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
  LessonGetById(id:number): Observable<any> {
    return this.http.get<any>(this.baseurl+`Lesson/GetByIdLesson?id=${id}`);
  }
  LessonUpdate(id: any, data: any): Observable<any> {
    const formData = new FormData();
    console.log(id)
    console.log(data)
    formData.append('Id', id);
    formData.append('CourseId', data.CourseId);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('imagefile', data.imagefile, data.imagefile.name);
    formData.append('videofile', data.videofile, data.videofile.name);
    return this.http.put<any>(this.baseurl + `Lesson/UpdateLesson`, formData)
  }
  LessonDelete(id: any): Observable<any> {
    return this.http.delete<any>(this.baseurl + `Lesson/DeleteLesson?id=${id}`)
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
  NewsGetById(id:number): Observable<any> {
    return this.http.get<any>(this.baseurl+`News/GetByIdNews?id=${id}`);
  }
  NewsUpdate(id: any, data: any): Observable<any> {
    const formData = new FormData();
    console.log(id)
    console.log(data)
    formData.append('Id', id);
    formData.append('PopularTopicId', data.PopularTopicId);
    formData.append('Title', data.Title);
    formData.append('About', data.About);
    formData.append('imagefile', data.imagefile, data.imagefile.name);
    return this.http.put<any>(this.baseurl + `News/UpdateNews`, formData)
  }
  NewsDelete(id: any): Observable<any> {
    return this.http.delete<any>(this.baseurl + `News/DeleteNews?id=${id}`)
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
  PopularTopicGetById(id:number): Observable<any> {
    return this.http.get<any>(this.baseurl+`PopularTopic/GetByIdPopularTopic?id=${id}`);
  }
  PopularTopicUpdate(id: any, data: any): Observable<any> {
    const formData = new FormData();
    console.log(id)
    console.log(data)
    formData.append('Id', id);
    formData.append('TopicId', data.TopicId);
    formData.append('Name', data.Name);
    formData.append('Description', data.Description);
    formData.append('imagefile', data.imagefile, data.imagefile.name);
    return this.http.put<any>(this.baseurl + `PopularTopic/UpdatePopularTopic`, formData)
  }
  PopularTopicDelete(id: any): Observable<any> {
    return this.http.delete<any>(this.baseurl + `PopularTopic/DeletePopularTopic?id=${id}`)
  }
}
