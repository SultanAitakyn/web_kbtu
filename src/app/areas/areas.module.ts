import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasComponent } from './components/areas/areas.component';
import {RouterModule} from '@angular/router';
import {AboutUsComponent} from 'src/app/about/components/about-us/about-us.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

const routes = [
  {
    path: 'areas',
    component: AreasComponent
  }
]

@NgModule({
  declarations: [
    AreasComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), MatExpansionModule, MatIconModule
  ]
})
export class AreasModule { }
