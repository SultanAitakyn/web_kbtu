import { Component, OnInit } from '@angular/core';
import {CourseInterface} from 'src/app/shared/types/course.interface';
import {MockedDataCourses} from 'src/app/shared/data/mockedData';
import {HomeService} from 'src/app/home/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  categories = ['HTML', 'CSS', 'JavaScript', 'Angular'];
  lastUploadedCourses: CourseInterface[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.homeService.getLastAddedCourses().subscribe((courses) => {
      this.lastUploadedCourses = courses;
    })
  }

}
