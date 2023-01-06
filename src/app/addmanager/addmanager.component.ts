import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { createManager } from '../models/society.model';
@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent implements OnInit {

  form = new FormGroup({
    Name: new FormControl(null, Validators.required),
    mobileNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[0-9]*$'),]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    city: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    roleId: new FormControl(null, Validators.required),
    society: new FormControl(null, Validators.required)

  });

  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute) { }

  allSociety: any;
  societyId: any;
  successMessage: any;
  fullName: any;
  Mobile: any;
  myemail: any
  myPassword: any;
  mycity: any
  myRoleId: any
  mySociety: any;

  ngOnInit() {

    this.loginService.getAllSociety().subscribe((res: any) => {
      this.allSociety = res.response;
      console.log(this.allSociety);
    });
  }
  onSociety(id: string) {
    this.societyId = id;

  }



  onSubmitButton() {
    let submitModel: createManager = {

      fullname: this.fullName || null,

      email: this.myemail || null,

      mobile: this.Mobile || null,

      address: this.mycity || null,

      password: this.myPassword || null,

      roleId: "3" ,

      societyId: this.societyId || null,
    }

    this.loginService.createManagerDetails(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      if (this.successMessage) {
        this.route.navigateByUrl('society');
      }

    })
  }

}

