import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';
import {map, Observable} from 'rxjs';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface';
import {LoginRequestInterface} from 'src/app/auth/types/login.interface';
import {CourseInterface} from 'src/app/shared/types/course.interface';

@Injectable()

export class FavouriteService {
  constructor(private http: HttpClient) {
  }

  getLastAddedCourses(): Observable<CourseInterface[]> {
    return this.http.get<CourseInterface[]>(environment.apiUrl + 'lastAddedCourses');
  }
}
