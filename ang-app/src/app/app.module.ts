import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDealsComponent } from './main-deals/main-deals.component';
import { PrimeDealsComponent } from './prime-deals/prime-deals.component';
import { CallbackComponent } from './callback.component';
import { AuthService } from './auth/auth.service';
import { DealService } from './deal.service';
import { CheckoutFormComponent } from './checkout/checkout.form';
import { FormValidationComponent } from './checkout/checkout.form.validation';



@NgModule({
  declarations: [
    AppComponent,
    MainDealsComponent,
    PrimeDealsComponent,
    CallbackComponent,
    CheckoutFormComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    DealService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
