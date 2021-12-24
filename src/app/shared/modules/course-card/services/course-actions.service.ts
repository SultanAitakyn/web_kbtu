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

export class CourseActionsService {
  constructor(private http: HttpClient) {
  }

  addToFavourites(favourites: number[], id: number) {
    return this.http.patch(environment.apiUrl + `users/${id}`, {favourites});
  }
}
