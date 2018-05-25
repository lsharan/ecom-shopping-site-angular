import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';


@Component({
  selector: 'checkout-form',
  templateUrl: './checkout.form.html'
})

export class CheckoutFormComponent {
  checkoutForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.checkoutForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': '',
      'address1': [null, Validators.required],
      'address2': [null, Validators.required],
      'pinCode': '',
      'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'cardNumber': [null, Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])],
      'nameOnCard': '',
      'month': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2)])],
      'year': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
      'cvv': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(3)])]
    })
  }

  submitForm(value: any) {
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}