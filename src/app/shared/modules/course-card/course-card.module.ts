import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCardComponent} from 'src/app/shared/modules/course-card/course-card/course-card.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {CourseActionsService} from 'src/app/shared/modules/course-card/services/course-actions.service';



@NgModule({
  declarations: [CourseCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [CourseCardComponent],
  providers: [CourseActionsService]
})
export class CourseCardModule { }
