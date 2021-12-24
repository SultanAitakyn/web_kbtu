import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from 'src/app/home/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'favourites',
  //   loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesModule),
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'course/:id',
  //   loadChildren: () => import('./course/course.module').then(m => m.CourseModule),
  //   canActivate: [AuthGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
