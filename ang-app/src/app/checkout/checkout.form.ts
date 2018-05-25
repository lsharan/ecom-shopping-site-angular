import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'checkout-form',
  templateUrl: './checkout.form.html'
})

export class CheckoutFormComponent {
  checkoutForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.checkoutForm = fb.group({
      'firstName': '',
      'lastName': '',
      'address1': '',
      'address2': '',
      'pinCode': '',
      'mobileNo': '',
      'cardNumber': '',
      'nameOnCard': '',
      'month': '',
      'year': '',
      'cvv': ''
    })
  }

  submitForm(value: any) {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}