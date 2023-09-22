import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent {
  productForm: FormGroup = this.formBuilder.group({
    productName: [
      '', // Valor por defecto del campo
      Validators.required
    ]
  });

  constructor( private formBuilder: FormBuilder ) {}

  onSubmit() {
    console.log( this.productForm.value );
  }

}
