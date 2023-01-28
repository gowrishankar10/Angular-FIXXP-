import { state } from './../models/society.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FpverifyEmail } from '../models/society.model';
import { MatDialog } from '@angular/material/dialog';
import { FpVerifyOtpComponent } from '../fp-verify-otp/fp-verify-otp.component';
import { ToastrService } from 'ngx-toastr';
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
    public dialog: MatDialog,
    private toastr: ToastrService,
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


    this.loginService.FpVerifyEmail(submitModel).subscribe((res: any) => {
      if((res.flag===1)){
        this.toastr.info(res.message);
      this.EmailValue = emailid;
      this.route.navigate(['fp-verify-otp'], {
        queryParams: { email: emailid },
      });
    }
    else{
      this.toastr.error(res.message);
    }

     
    });
  }
}
