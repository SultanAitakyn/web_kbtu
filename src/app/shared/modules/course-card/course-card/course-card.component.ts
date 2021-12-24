import {Component, Input, OnInit} from '@angular/core';
import {CourseInterface} from 'src/app/shared/types/course.interface';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from 'src/app/course/services/course.service';
import {select, Store} from '@ngrx/store';
import {userSelector} from 'src/app/auth/store/selectors';
import {CourseActionsService} from 'src/app/shared/modules/course-card/services/course-actions.service';
import {addToFav, loginAction} from 'src/app/auth/store/actions';

@Component({
  selector: 'kbtu-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course!: any;
  currentUser: CurrentUserInterface | null = null;

  constructor(private route: ActivatedRoute, private courseActionsService: CourseActionsService, private store: Store) {
    const user = this.store.pipe(select(userSelector));
    user.subscribe((curUser) => this.currentUser = curUser);
  }

  ngOnInit(): void {
  }

  handleFavActions(courseId: number) {
    if (!this.currentUser!.favourites.includes(courseId)) {
      const newFav = [...this.currentUser!.favourites];
      newFav.push(courseId);
      this.manageFavourites(newFav);
    } else {
      const newFav = [...this.currentUser!.favourites];
      const index = newFav.findIndex(v => v === courseId);
      newFav.splice(index, 1);
      this.manageFavourites(newFav);
    }
  }

  manageFavourites(newFav: number[]) {
    this.courseActionsService.addToFavourites(newFav, this.currentUser!.id).subscribe(() => {
      this.store.dispatch(addToFav({favourites: newFav}));
    });
  }

}
