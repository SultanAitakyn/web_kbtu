import { Component, OnInit } from '@angular/core';
import {MockedDataCourses} from 'src/app/shared/data/mockedData';
import {FavouriteService} from 'src/app/favourites/services/favourite.service';
import {CourseInterface} from 'src/app/shared/types/course.interface';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {select, Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {userSelector} from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouriteCourses: CourseInterface[] = [];
  currentUser: CurrentUserInterface | null = null;

  constructor(private store: Store, private favouriteService: FavouriteService) {
    const user = this.store.pipe(select(userSelector));
    user.subscribe((curUser) => this.currentUser = curUser);
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.favouriteService.getLastAddedCourses().subscribe((courses) => {
      this.favouriteCourses = courses.filter(v => this.currentUser!.favourites.includes(v.id));
    })
  }

}
