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
    private AR: ActivatedRoute
  ) {}
  emailvalue:any
  OTPCode: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  ngOnInit() {}

  onSubmit() {
    let submitModel: fpverifyOtp = {
      email : this.emailvalue,
      otpCode: this.OTPCode,
    };

    this.loginService.FpVerifyOtp(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;

      
      
     
    });
  }
}
