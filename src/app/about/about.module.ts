import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: 'about',
    component: AboutUsComponent
  }
]

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
