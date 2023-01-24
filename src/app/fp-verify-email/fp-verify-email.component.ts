import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FpverifyEmail } from '../models/society.model';
import { MatDialog } from '@angular/material/dialog';
import { FpVerifyOtpComponent } from '../fp-verify-otp/fp-verify-otp.component';
@Component({
  selector: 'app-fp-verify-email',
  templateUrl: './fp-verify-email.component.html',
  styleUrls: ['./fp-verify-email.component.css'],
})
export class FpVerifyEmailComponent implements OnInit {
  successMessage: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  Email: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  EmailValue: any;

  ngOnInit() {}

  onSubmit(emailid: string) {
    let submitModel: FpverifyEmail = {
      email: this.Email,
    };
    this.Email = emailid;

    console.log('im neo' + emailid);

    this.loginService.FpVerifyEmail(submitModel).subscribe((res: any) => {
  
      this.successMessage = res.message;
      alert(res.message);
      
      this.route.navigateByUrl('fp-verify-otp');

      this.EmailValue = this.Email
      


      console.log('im OTP MAILValue  =  ' +  this.EmailValue );
    });
  }
}
