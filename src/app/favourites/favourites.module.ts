import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './components/favourites/favourites.component';
import {RouterModule, Routes} from '@angular/router';
import {CourseCardModule} from 'src/app/shared/modules/course-card/course-card.module';
import {FavouriteService} from 'src/app/favourites/services/favourite.service';

const routes: Routes = [
  {
    path: 'favourites',
    component: FavouritesComponent
  }
]

@NgModule({
  declarations: [
    FavouritesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CourseCardModule
  ],
  providers: [FavouriteService]
})
export class FavouritesModule { }
