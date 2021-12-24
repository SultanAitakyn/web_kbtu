import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';
import {map, Observable} from 'rxjs';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface';
import {LoginRequestInterface} from 'src/app/auth/types/login.interface';
import {NewsTypeInterface} from 'src/app/news/types/news.type';

@Injectable()

export class NewsService {
  constructor(private http: HttpClient) {
  }

  getNews(): Observable<NewsTypeInterface[]> {
    return this.http.get<NewsTypeInterface[]>(environment.apiUrl + 'news');
  }

}
