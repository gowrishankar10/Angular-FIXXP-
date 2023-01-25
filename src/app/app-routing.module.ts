import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SocietyComponent } from './society/society.component';
import { ProfileComponent } from './profile/profile.component';
import { BlockComponent } from './block/block.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FlatsComponent } from './flats/flats.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { FlatusersComponent } from './flatusers/flatusers.component';
import { AgnysComponent } from './agnys/agnys.component';
import { IdbyusernameComponent } from './idbyusername/idbyusername.component';
import { SocietysearchComponent } from './societysearch/societysearch.component';
import { AddsocietyComponent } from './addsociety/addsociety.component';
import { AddcityComponent } from './addcity/addcity.component';
import { ListcityComponent } from './listcity/listcity.component';
import { ListpincodeComponent } from './listpincode/listpincode.component';
import { AddpincodeComponent } from './addpincode/addpincode.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ManagersComponent } from './managers/managers.component';
import { AddmanagerComponent } from './addmanager/addmanager.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthenticationGuard } from './Authguard/authentication.guard';
import { AddmanagerbankdetailComponent } from './addmanagerbankdetail/addmanagerbankdetail.component';
import { AbsComponent } from './abs/abs.component';
import { ViewmanagerComponent } from './viewmanager/viewmanager.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { AddroleComponent } from './addrole/addrole.component';
import { AddstateComponent } from './addstate/addstate.component';
import { ListstateComponent } from './liststate/liststate.component';
import { SocietyDailyWorkersComponent } from './society-daily-workers/society-daily-workers.component';
import { SocietyBasedVisitorsComponent } from './society-based-visitors/society-based-visitors.component';
import { SocietyEmergencyContactComponent } from './society-emergency-contact/society-emergency-contact.component';
import { SocietyTicketWorkersComponent } from './society-ticket-workers/society-ticket-workers.component';
import { SocietySecurityGuardComponent } from './society-security-guard/society-security-guard.component';
import { SocietyPromotionsComponent } from './society-promotions/society-promotions.component';
import { ViewWorkersComponent } from './view-workers/view-workers.component';
import { DailyHelpersKycComponent } from './daily-helpers-kyc/daily-helpers-kyc.component';
import { SecurityGuardKycComponent } from './security-guard-kyc/security-guard-kyc.component';
import { ExternalGuard } from './Authguard/external-quard.guard';
import { ViewWorkersKycComponent } from './view-workers-kyc/view-workers-kyc.component';
import { AddvisitorComponent } from './addvisitor/addvisitor.component';
import { FpVerifyEmailComponent } from './fp-verify-email/fp-verify-email.component';
import { FpVerifyOtpComponent } from './fp-verify-otp/fp-verify-otp.component';
import { VisitorsCategoryComponent } from './visitors-category/visitors-category.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/adminlogin', pathMatch: 'full' },
  { path: 'adminlogin', component: AdminloginComponent, canActivate: [ExternalGuard] },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'society',
    component: SocietyComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'block/:id',
    component: BlockComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'flats/:id',
    component: FlatsComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'usermanagement',
    component: UsermanagementComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'flatusers/:id',
    component: FlatusersComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'flatusers',
    component: FlatusersComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addcity',
    component: AddcityComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addsociety',
    component: AddsocietyComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addsociety/:id/:name',
    component: AddsocietyComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addvisitor/:id/:name',
    component: AddsocietyComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'societysearch',
    component: SocietysearchComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'listpincode',
    component: ListpincodeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'listcity',
    component: ListcityComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addpincode',
    component: AddpincodeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'transactionhistory',
    component: TransactionhistoryComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'agnys',
    component: AgnysComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'viewuser/:id',
    component: ViewuserComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'managers',
    component: ManagersComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addmanager',
    component: AddmanagerComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'Authguard',
    component: AuthenticationGuard,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addmanagerbankdetail/:id',
    component: AddmanagerbankdetailComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'abs', component: AbsComponent, canActivate: [AuthenticationGuard] },
  {
    path: 'viewmanager/:id',
    component: ViewmanagerComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'rolelist',
    component: RolelistComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addrole',
    component: AddroleComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'liststate',
    component: ListstateComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addstate',
    component: AddstateComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'society-daily-workers',
    component: SocietyDailyWorkersComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'society-based-visitors',
    component: SocietyBasedVisitorsComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'society-emergency-contact',
    component: SocietyEmergencyContactComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'society-ticket-workers',
    component: SocietyTicketWorkersComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'society-security-guard',
    component: SocietySecurityGuardComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'society-promotions',
    component: SocietyPromotionsComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'view-workers/:id',
    component: ViewWorkersComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'daily-helpers-kyc/:id',
    component: DailyHelpersKycComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'security-guard-kyc/:id',
    component: SecurityGuardKycComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'view-workers-kyc',
    component: ViewWorkersKycComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addvisitor',
    component: AddvisitorComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'fp-verify-email',
    component: FpVerifyEmailComponent, 
  },
  {
    path: 'fp-verify-email/:EmailValue',
    component: FpVerifyOtpComponent, 
  },
  {
    path: 'fp-verify-otp',
    component: FpVerifyOtpComponent, 
  },
  {
    path: 'visitor-category',
    component: VisitorsCategoryComponent, 
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent, 
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent, 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
