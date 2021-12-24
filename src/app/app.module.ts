import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from 'src/app/auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HomeModule} from 'src/app/home/home.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {ProfileModule} from 'src/app/profile/profile.module';
import {SubscriptionPlanModule} from 'src/app/subscription-plan/subscription-plan.module';
import {CourseModule} from 'src/app/course/course.module';
import {HttpConfigInterceptor} from 'src/app/shared/interceptor/HttpConfigInterceptor.interceptor';
import {TopBarModule} from 'src/app/top-bar/top-bar.module';
import {NewsModule} from 'src/app/news/news.module';
import {AboutModule} from 'src/app/about/about.module';
import {AreasModule} from 'src/app/areas/areas.module';
import {FavouritesModule} from 'src/app/favourites/favourites.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states,
      logOnly: environment.production
    }),
    BrowserAnimationsModule,
    SubscriptionPlanModule,
    TopBarModule,
    NewsModule,
    AboutModule,
    AreasModule,
    FavouritesModule,
    ProfileModule,
    CourseModule,

    //Material imports
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
