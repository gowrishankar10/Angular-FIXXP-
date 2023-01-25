import { Component } from '@angular/core';
import { resetPassword } from '../models/society.model';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  successMessage: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}
  Emailvalue: any;
  NewPassword: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  ngOnInit() {
    this.activeRouter.queryParams.subscribe((param: any) => {
      this.Emailvalue = param.email;
      console.log('RESET page ' + this.Emailvalue);
    });
  }

  onSubmit() {
    let submitModel: resetPassword = {   
      email: this.Emailvalue,
      newPassword : this.NewPassword,
    };


    this.loginService.ResetPassword(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      alert(res.message);
     
      if(res.flag===1){
        this.route.navigateByUrl('adminlogin');
      }
      else{
        alert( 'Already Exist');
        
      }
    });
  }
  }

