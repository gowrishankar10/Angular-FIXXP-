import { state } from './../models/society.model';
import { Component } from '@angular/core';
import { fpverifyOtp } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';
import { ActivatedRoute, Router,  } from '@angular/router';
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
    private ActivatedRoute: ActivatedRoute
  ) {}
  
  getotp : any=localStorage.getItem('id');
  
  expandedIndex = 0;
  resendOtp:any;
  OTP:any;
  EmailValue: any;
  OTPCode: any;
  OTPCode2: any;
  OTPCode3: any;
  OTPCode4: any;
  OTPCode5: any;
  OTPCode6: any; 
  move:any;
  ngOnInit() {
    
    this.ActivatedRoute.queryParams.subscribe((param: any) => {
      this.EmailValue = param.email;
      console.log('OTP page ' + this.EmailValue);
    });
  }
  resend(resendOtp: number)
  {
    this.loginService.ResensOTP(this.getotp).subscribe((res:any)=>
    {
      this.resendOtp = res.response;
    });
  }

  onSubmit() {
    let submitModel: fpverifyOtp = {
      email: this.EmailValue,
      otpCode: this.OTPCode +
       this.OTPCode2 +
        this.OTPCode3 +
         this.OTPCode4 + 
         this.OTPCode5 + 
         this.OTPCode6,
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
