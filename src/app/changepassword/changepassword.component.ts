import { ProfileComponent } from './../profile/profile.component';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePassword } from '../models/society.model';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePsd: any;
  profiled:any=localStorage.getItem('id');
  confirmPassword:any

  passwordForm = new FormGroup({
    newPasswords: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private loginService: LoginService, private route: Router, private toastr: ToastrService){}
  password:any
  newPasswords:any;
  ngOnInit(): void {
      
  }
  onSubmit() {

 
    let submitModel: ChangePassword = {
      password: this.password,
      newPassword: this.newPasswords,
    };
    
    this.loginService.ChangePassword(this.profiled ,submitModel).subscribe((res: any) => {
    this.changePsd= res.response;
      if(res.flag===1){
        this.loginService.logout();
      }
      else {
        this.toastr.error(res.message);
      }
    });
  }
}

