import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss']
})
export class SubscriptionPlanComponent implements OnInit {

  plans = [
    {
      name: 'Minimum',
      price: 500
    },
    {
      name: 'Standard',
      price: 1000
    },
    {
      name: 'Pro',
      price: 1500
    },
    {
      name: 'Pro Max',
      price: 2000
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
