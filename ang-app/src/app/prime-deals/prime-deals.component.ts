import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from '../deal-object-structure';
import { DealService } from '../deal.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-prime-deals',
  templateUrl: './prime-deals.component.html',
  styleUrls: ['./prime-deals.component.css']
})
export class PrimeDealsComponent implements OnInit, OnDestroy {
dealsSub: Subscription;
primeDeals: Deal[];
error: any;

  constructor(
    public dealService: DealService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.dealsSub = this.dealService
    .getPrimeDeals()
    .subscribe(
      deals => this.primeDeals = deals,
      err => error => this.error = err
    );
  }

  ngOnDestroy() {
    this.dealsSub.unsubscribe();
  }
}
