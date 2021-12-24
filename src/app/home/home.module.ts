import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/home/auth.guard';
import {HomeService} from 'src/app/home/services/home.service';
import {CourseService} from 'src/app/course/services/course.service';
import {CourseCardModule} from 'src/app/shared/modules/course-card/course-card.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CourseCardModule
  ],
  providers: [AuthGuard, HomeService, CourseService]
})
export class HomeModule {

}
