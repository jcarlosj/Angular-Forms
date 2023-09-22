import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Employee {
  name: string;
  age: number;
  address: string;
  email: string;
}

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent {
  employee: Employee = {
    name: '',
    age: 0,
    address: '',
    email: ''
  };

  onSubmit = () => {
    console.log( JSON.stringify( this.employee ) );
  }

}
