import { state } from './../models/society.model';
import { Component } from '@angular/core';
import { fpverifyOtp } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';
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
  getotp : any=localStorage.getItem('id');
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  resendOtp:any;
  ngOnInit() {
    this.activeRouter.queryParams.subscribe((param: any) => {
      this.EmailValue = param.email;
      console.log('OTP page ' + this.EmailValue);
    });
  }
  resend()
  {
    this.loginService.ResensOTP(this.getotp).subscribe((res:any)=>
    {
      this.resendOtp = res.response;
    });
  }

  onSubmit() {
    let submitModel: fpverifyOtp = {
      email: this.EmailValue,
      otpCode: this.OTPCode,
    };
    

    this.loginService.FpVerifyOtp(submitModel).subscribe((res: any) => {
     
    
      if(res.flag==1){
        this.route.navigate(['reset-password'], {
          queryParams: { email:this.EmailValue },
        });
      }
      else{
        alert('wrong OTP')
      }
      
    });
  }
}
