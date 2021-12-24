import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducers} from 'src/app/auth/store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from 'src/app/auth/store/effects/register.effect';
import {LoginEffect} from 'src/app/auth/store/effects/login.effect';
import {UpdateEffect} from 'src/app/auth/store/effects/update.effect';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {NewsService} from 'src/app/news/services/news.service';

const routes = [
  {
    path: 'news',
    component: NewsComponent
  }
]

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule
  ],
  providers: [NewsService]
})
export class NewsModule { }
