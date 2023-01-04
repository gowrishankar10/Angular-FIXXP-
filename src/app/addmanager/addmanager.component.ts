import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent {

  form = new FormGroup({
    Name: new FormControl(null, Validators.required),
    mobileNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[0-9]*$'),]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    city: new FormControl(null, Validators.required),
    password:new FormControl(null,[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')])


  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  get Name() {
    return this.form.get('Name');
  }

  get mobileNumber() {
    return this.form.get('mobileNumber');
  }

  get email() {
    return this.form.get('email');
  }

  get city()
  {
    return this.form.get('city')
  }

  get password ()
  {
    return this.form.get('password')
  }
}

