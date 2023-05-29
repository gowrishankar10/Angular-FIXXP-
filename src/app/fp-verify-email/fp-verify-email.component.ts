import { state } from './../models/society.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FpverifyEmail } from '../models/society.model';
import { MatDialog } from '@angular/material/dialog';
import { FpVerifyOtpComponent } from '../fp-verify-otp/fp-verify-otp.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-fp-verify-email',
  templateUrl: './fp-verify-email.component.html',
  styleUrls: ['./fp-verify-email.component.css'],
})
export class FpVerifyEmailComponent implements OnInit {
  successMessage: any;
  loginForm: FormGroup<{ email: FormControl<null>; password: FormControl<string | null>; }> | undefined;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  Email: any;
  EmailValue: any;

  ngOnInit() {

    
    this.loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
      });
  }
  

  
    onsubmit(emailid: string) {
      let submitModel: FpverifyEmail = {
        email: this.Email,
      };
  

    this.loginService.FpVerifyEmail(submitModel).subscribe((res: any) => {

      if (res.flag === 1) {
     confirm('Its Success Dont Forgot Again !!')
        this.route.navigate(['fp-verify-otp'], {
          queryParams: { email: emailid },
          
        });
      }
       else {
        alert("Wrong Email");
      }
      console.log('im OTP MAILValue  =  ' + this.EmailValue);
    });
  }
  login() {
    this.route.navigateByUrl('/adminlogin')
  }

}
