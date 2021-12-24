import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from 'src/app/app-routing.module';

const routes = [
  {
    path: 'subscription',
    component: SubscriptionPlanComponent
  }
]

@NgModule({
  declarations: [
    SubscriptionPlanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppRoutingModule
  ]
})
export class SubscriptionPlanModule { }
