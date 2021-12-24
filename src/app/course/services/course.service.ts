import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';
import {map, Observable} from 'rxjs';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface';
import {LoginRequestInterface} from 'src/app/auth/types/login.interface';
import {CourseInterface} from 'src/app/shared/types/course.interface';
import {CommentInterface, ResponseCommentInterface} from 'src/app/course/types/comment.interface';

@Injectable()

export class CourseService {
  constructor(private http: HttpClient) {
  }

  getCourseInfo(id: string): Observable<CourseInterface> {
    return this.http.get<CourseInterface>(environment.apiUrl + `lastAddedCourses/${id}`);
  }

  likeCourse(likes: string[], id: string) {
    return this.http.patch(environment.apiUrl + `lastAddedCourses/${id}`, {likes});
  }

  dislikeCourse(dislikes: string[], id: string) {
    return this.http.patch(environment.apiUrl + `lastAddedCourses/${id}`, {dislikes});
  }

  getCourseComments(id: string): Observable<ResponseCommentInterface> {
    return this.http.get<ResponseCommentInterface>(environment.apiUrl + `courseComments/${id}`);
  }

  postComment(id: string, data: ResponseCommentInterface) {
    return this.http.patch(environment.apiUrl + `courseComments/${id}`, data);
  }
}
