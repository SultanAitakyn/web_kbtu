import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';

const routes = [
  {
    path: 'profile',
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule, MatButtonModule,
    MatTabsModule, MatTableModule, ReactiveFormsModule
  ]
})
export class ProfileModule { }
