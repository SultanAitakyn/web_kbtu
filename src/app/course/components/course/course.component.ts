import {Component, OnInit} from '@angular/core';
import {CourseInterface} from 'src/app/shared/types/course.interface';
import {ActivatedRoute} from '@angular/router';
import {MockedDataCourses} from 'src/app/shared/data/mockedData';
import {CourseService} from 'src/app/course/services/course.service';
import {select, Store} from '@ngrx/store';
import {isLoggedIn, userSelector} from 'src/app/auth/store/selectors';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {CommentInterface, ResponseCommentInterface} from 'src/app/course/types/comment.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course: CourseInterface | undefined;
  currentUser: CurrentUserInterface | null = null;
  comments: CommentInterface[] | null = null;
  mockedCourses = MockedDataCourses;
  currentComment: string = '';

  constructor(private route: ActivatedRoute, private courseService: CourseService, private store: Store) {
    const user = this.store.pipe(select(userSelector));
    user.subscribe((curUser) => this.currentUser = curUser);
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const id: string = this.route.snapshot.params['id'];
    this.courseService.getCourseInfo(id).subscribe((course) => {
      this.course = course;
    });

    this.courseService.getCourseComments(id).subscribe((response) => {
      this.comments = response.comments;
    })
  }

  likeCourse() {
    if (this.currentUser) {
      if (!this.course!.likes.includes(this.currentUser.email)) {
        this.course!.likes.push(this.currentUser.email);
        this.courseService.likeCourse(this.course!.likes, this.course!.id.toString()).subscribe(() => {
        })
      }
      if (this.course!.dislikes.includes(this.currentUser.email)) {
        this.course!.dislikes = this.course!.dislikes.filter(v => v !== this.currentUser!.email);
        this.courseService.dislikeCourse(this.course!.dislikes, this.course!.id.toString()).subscribe(() => {
        })
      }
    }
  }

  dislikeCourse() {
    if (this.currentUser) {
      if (this.course!.likes.includes(this.currentUser.email)) {
        this.course!.likes = this.course!.likes.filter(v => v !== this.currentUser!.email);
        this.courseService.likeCourse(this.course!.likes, this.course!.id.toString()).subscribe(() => {
        })
      }
      if (!this.course!.dislikes.includes(this.currentUser.email)) {
        this.course!.dislikes.push(this.currentUser.email);
        this.courseService.dislikeCourse(this.course!.dislikes, this.course!.id.toString()).subscribe(() => {
        })
      }
    }
  }

  postComment() {
    if (this.currentComment.trim() != '') {
      let newComments = this.comments ? [...this.comments] : [];
      newComments!.push({
        comment: this.currentComment,
        email: this.currentUser!.email
      })
      const data: ResponseCommentInterface = {
        id: this.course!.id,
        comments: newComments!
      }
      this.courseService.postComment(this.course!.id.toString(), data).subscribe(() => {
        this.comments = newComments;
        this.currentComment = '';
      });
    }
  }

}
