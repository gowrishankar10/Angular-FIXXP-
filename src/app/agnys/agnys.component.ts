import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-agnys',
  templateUrl: './agnys.component.html',
  styleUrls: ['./agnys.component.css']
})
export class AgnysComponent   {


  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

    
  }




    }
  

  //   form = new FormGroup({
  //     city: new FormControl(null, Validators.required),
  //     society: new FormControl(null, Validators.required),
  //     pinCode: new FormControl(null, [
  //       Validators.required,
  //       Validators.minLength(2),
  //       Validators.pattern('^[0-9]*$'),
  //     ]),
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //   });
  
  //   onSubmit() {
  //     if (this.form.valid) {
  //       console.log(this.form.value);
  //     }
  //   }
  
  //   get city() {
  //     return this.form.get('city');
  //   }
  
  //   get society() {
  //     return this.form.get('society');
  //   }
  
  //   get pinCode() {
  //     return this.form.get('pinCode');
  //   }
  
  //   get email() {
  //     return this.form.get('email');
  //   }
  // }


