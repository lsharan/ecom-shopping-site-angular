import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent } from './callback.component';
import { MainDealsComponent } from './main-deals/main-deals.component';
import { PrimeDealsComponent } from './prime-deals/prime-deals.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'deals',
    pathMatch:'full'
  },
  {
    path: 'deals',
    component: MainDealsComponent
  },
  {
    path: 'prime',
    component: PrimeDealsComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
