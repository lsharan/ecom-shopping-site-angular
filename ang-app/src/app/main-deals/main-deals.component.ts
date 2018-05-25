import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from '../deal-object-structure';

import { AuthService } from '../auth/auth.service';
import { DealService } from '../deal.service';


@Component({
  selector: 'app-main-deals',
  templateUrl: './main-deals.component.html',
  styleUrls: ['./main-deals.component.css']
})
export class MainDealsComponent implements OnInit, OnDestroy {

  dealsSub: Subscription;
  mainDeals: Deal[];
  error:any;

  constructor(
    public dealService: DealService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.dealsSub = this.dealService
      .getMainDeals()
      .subscribe(
        deals => this.mainDeals = deals,
        err => this.error = err
      )
  }

  ngOnDestroy() {
    this.dealsSub.unsubscribe();
  }

}
