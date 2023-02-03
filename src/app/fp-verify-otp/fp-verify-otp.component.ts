import { state } from './../models/society.model';
import { Component } from '@angular/core';
import { fpverifyOtp } from '../models/society.model';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fp-verify-otp',
  templateUrl: './fp-verify-otp.component.html',
  styleUrls: ['./fp-verify-otp.component.css'],
})
export class FpVerifyOtpComponent {
  successMessage: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}
  EmailValue:any;
  OTPCode: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  
  ngOnInit() {
    this.activeRouter.queryParams.subscribe((param: any) => {
      this.EmailValue = param.email;
      console.log('OTP page ' + this.EmailValue);
    });
  }

  onSubmit() {
    let submitModel: fpverifyOtp = {
      email: this.EmailValue,
      otpCode: this.OTPCode,
    };
    

    this.loginService.FpVerifyOtp(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      alert(res.message);
        this.route.navigate(['reset-password'], {
          queryParams: { email:this.EmailValue },
        });
      
    });
  }
}
