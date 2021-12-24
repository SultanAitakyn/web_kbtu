import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from 'src/app/auth/components/register/register.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducers} from 'src/app/auth/store/reducers';
import {AuthService} from 'src/app/auth/services/auth.service';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from 'src/app/auth/store/effects/register.effect';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from 'src/app/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from 'src/app/home/components/home/home.component';
import {LoginEffect} from 'src/app/auth/store/effects/login.effect';
import {ProfileService} from 'src/app/profile/services/profile.service';
import {UpdateEffect} from 'src/app/auth/store/effects/update.effect';

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, UpdateEffect]),
    AppRoutingModule,
    MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, ProfileService]
})

export class AuthModule {
}
