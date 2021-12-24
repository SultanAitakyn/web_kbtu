import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {SafePipe} from 'src/app/pipes/safe.pipe';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {CourseService} from 'src/app/course/services/course.service';

const routes: Routes = [
  {
    path: 'course/:id',
    component: CourseComponent
  }
]

@NgModule({
  declarations: [
    CourseComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppRoutingModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [CourseService]
})
export class CourseModule {

}
