import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent } from './callback.component';
import { MainDealsComponent } from './main-deals/main-deals.component';
import { PrimeDealsComponent } from './prime-deals/prime-deals.component';
import { CheckoutFormComponent} from './checkout/checkout.form'
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'deals',
    pathMatch: 'full'
  },
  {
    path: 'deals',
    component: MainDealsComponent
  },
  {
    path: 'special',
    component: PrimeDealsComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'checkout',
    component: CheckoutFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
