import { Component } from '@angular/core';
import { resetPassword } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  password: any;
  items = ['Main Master >'];
  itemss = ['User Management >'];
  items1 = ['Society Management >'];
   
  showPassword = false;
  expandedIndex = 0;
  confirmPassword:any
  passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.activeRouter.queryParams.subscribe((param: any) => {
      this.Emailvalue = param.email;
      console.log('RESET page ' + this.Emailvalue);
    });
  }

  onSubmit() {
    let submitModel: resetPassword = {   
      email: this.Emailvalue,
      newPassword : this.password,
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
  togglePasswordVisibility(passwordInput: { type: string; }) {
    this.showPassword = !this.showPassword;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }
  togglePasswordVisibilitys(passwordInput1: { type: string; }) {
    this.showPassword = !this.showPassword;
    passwordInput1.type = this.showPassword ? 'text' : 'password';
  }
DashboardComponent()
{
  this.route.navigateByUrl(`/dashboard`);
}
SocietyComponent()
{
  this.route.navigateByUrl(`/society`);
}
TransactionhitoryComponent()
{
  this.route.navigateByUrl(`/transactionhistory`);
}
TicketsComponenets()
{
  this.route.navigateByUrl(`/tickets`);
}
ManagerComponents()
{
  this.route.navigateByUrl(`/manager`);
}
UsermanagementComponent()
{
  this.route.navigateByUrl(`/usermanagement`);
}
ListcityComponent()
{
  this.route.navigateByUrl(`/listcity`);
}
ListpincodeComponenet()
{
  this.route.navigateByUrl(`/listpincode`);
}
AddcityComponent()
{
  this.route.navigateByUrl(`/addcity`); 
}
Dashboard()
{
  this.route.navigateByUrl(`/dashboard`);
}
ListstateComponent()
{
  this.route.navigateByUrl(`/liststate`);
}
RolelistComponent()
{
  this.route.navigateByUrl(`/rolelist`);
}
SocietyBasedVisitorsComponent()
{
  this.route.navigateByUrl(`/society-based-visitors`);
}
SocietyDailyWorkersComponent()
{
  this.route.navigateByUrl(`/society-daily-workers`);
}
SocietyEmergencyContactComponent()
{
  this.route.navigateByUrl(`/society-emergency-contact`);
}
SocietySecurityGuardComponent()
{
  this.route.navigateByUrl(`/society-security-guard`);
}
SocietyTicketWorkersComponent()
{
  this.route.navigateByUrl(`/society-ticket-workers`);
}
  }

