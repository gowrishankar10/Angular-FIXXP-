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
import { RaisedComplaintComponent } from './raised-complaint/raised-complaint.component';
import { AddraisedComplaintComponent } from './addraised-complaint/addraised-complaint.component';
import { EditraisedComplaintComponent } from './editraised-complaint/editraised-complaint.component';
import { DailyHelperCategoryComponent } from './daily-helper-category/daily-helper-category.component';
import { AdddailyHelperCategoryComponent } from './adddaily-helper-category/adddaily-helper-category.component';
import { ViewTicketWorkersComponent } from './view-ticket-workers/view-ticket-workers.component';
import { ViewSecurityWorkersComponent } from './view-security-workers/view-security-workers.component';
import { ViewSecurityWorkersKycComponent } from './view-security-workers-kyc/view-security-workers-kyc.component';
import { ViewTicketWorkersKycComponent } from './view-ticket-workers-kyc/view-ticket-workers-kyc.component';
import { EditVisitorCategoryComponent } from './edit-visitor-category/edit-visitor-category.component';
import { ViewailyHelperDocComponent } from './viewaily-helper-doc/viewaily-helper-doc.component';
import { ViewTicketWorkersKycDocComponent } from './view-ticket-workers-kyc-doc/view-ticket-workers-kyc-doc.component';
import { ViewSecurityWorkersKycDocComponent } from './view-security-workers-kyc-doc/view-security-workers-kyc-doc.component';
import { UpdatePromotionComponent } from './update-promotion/update-promotion.component'; // import bn-ng-idle service
import { EditSocietyComponent } from './edit-society/edit-society.component'; // import bn-ng-idle service
import { EditCityComponent } from './edit-city/edit-city.component';
import { EditPincodeComponent } from './edit-pincode/edit-pincode.component';
import { EditStateComponent } from './edit-state/edit-state.component';
import { EditRoleComponent } from './edit-role/edit-role.component'; // import bn-ng-idle service
import { ViewSocietyLogoComponent } from './view-society-logo/view-society-logo.component'; // import bn-ng-idle service
import { CheckSocietyLogoComponent } from './check-society-logo/check-society-logo.component'; // import bn-ng-idle service
import { SocietyUploadLogoComponent } from './society-upload-logo/society-upload-logo.component';
import { VisitorsImageComponent } from './visitors-image/visitors-image.component';
import { CheckvisitorsimageComponent } from './checkvisitorsimage/checkvisitorsimage.component';
import { DueAmountComponent } from './due-amount/due-amount.component';
import { InvoicePdfComponent } from './invoice-pdf/invoice-pdf.component';
import { ViewDueAmountComponent } from './view-due-amount/view-due-amount.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SettlementUpdateComponent } from './settlement-update/settlement-update.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { AllAdminComponent } from './all-admin/all-admin.component';
import { WorkerTransactionHistoryComponent } from './worker-transaction-history/worker-transaction-history.component';
import { ViewWorkerTransactionsComponent } from './view-worker-transactions/view-worker-transactions.component';
import { ViewSocietyManagerKycComponent } from './view-society-manager-kyc/view-society-manager-kyc.component';
import { ViewKycManagerComponent } from './view-kyc-manager/view-kyc-manager.component';
import { ManagerKycApproveComponent } from './manager-kyc-approve/manager-kyc-approve.component';
import { AllWorkerTransactionComponent } from './all-worker-transaction/all-worker-transaction.component';
import { AddChargesComponent } from './add-charges/add-charges.component';
import { AllChargesComponent } from './all-charges/all-charges.component';
import { EditChargesComponent } from './edit-charges/edit-charges.component';
import { StampPaperComponent } from './stamp-paper/stamp-paper.component';
import { AddStampPaperComponent } from './add-stamp-paper/add-stamp-paper.component';
import { EditStampPaperComponent } from './edit-stamp-paper/edit-stamp-paper.component';
import { UserKycComponent } from './user-kyc/user-kyc.component';
import { FlatUserKycComponent } from './flat-user-kyc/flat-user-kyc.component';
import { EditDailyHelpesComponent } from './edit-daily-helpes/edit-daily-helpes.component';
import { AllVisitorsTypeComponent } from './all-visitors-type/all-visitors-type.component';
import { AddVisitorsTypeComponent } from './add-visitors-type/add-visitors-type.component';
import { AllUsersKycComponent } from './all-users-kyc/all-users-kyc.component';
import { AllUsersKycDocsComponent } from './all-users-kyc-docs/all-users-kyc-docs.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';

const routes: Routes = [
  { path: '', redirectTo: '/adminlogin', pathMatch: 'full' },
  {
    path: 'adminlogin',
    component: AdminloginComponent,
    canActivate: [ExternalGuard],
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  {
    path: 'due-amount',
    component: DueAmountComponent,
    canActivate: [AuthenticationGuard],
  },  
  {
    path: 'edit-profile/:id',
    component: EditProfileComponent,
    canActivate: [AuthenticationGuard],
  }, 
    {
    path: 'edit-manager/:id',
    component: EditManagerComponent,
    canActivate: [AuthenticationGuard],
  },  
  {
    path: 'all-users-kyc/:id',
    component: AllUsersKycComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'all-users-kyc-docs/:id',
    component: AllUsersKycDocsComponent,
    canActivate: [AuthenticationGuard],
  },
   {
    path: 'add-visitors-type',
    component: AddVisitorsTypeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'add-stamp-paper',
    component: AddStampPaperComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'stamp-paper',
    component: StampPaperComponent,
    canActivate: [AuthenticationGuard],
  }, {
    path: 'all-visitors-type',
    component: AllVisitorsTypeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'flat-user-kyc',
    component: FlatUserKycComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'add-charges',
    component: AddChargesComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'all-worker-transaction',
    component: AllWorkerTransactionComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-worker-transactions/:id',
    component: ViewWorkerTransactionsComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-daily-helpes/:id',
    component: EditDailyHelpesComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'user-kyc/:id/:id1',
    component: UserKycComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-charges/:id',
    component: EditChargesComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-stamp-paper/:id',
    component: EditStampPaperComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'manager-kyc-approve/:id',
    component: ManagerKycApproveComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-kyc-manager/:id',
    component: ViewKycManagerComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-society-manager-kyc/:id',
    component: ViewSocietyManagerKycComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'worker-transaction-history/:id',
    component: WorkerTransactionHistoryComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'all-admin',
    component: AllAdminComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'list-admin',
    component: ListAdminComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'settlement-update/:id',
    component: SettlementUpdateComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'admin-profile',
    component: AdminProfileComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'visitors-image/:id',
    component: VisitorsImageComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-due-amount/:id',
    component: ViewDueAmountComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'invoice-pdf/:id',
    component: VisitorsImageComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'checkvisitorsimage/:id',
    component: CheckvisitorsimageComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'check-society-logo/:id',
    component: CheckSocietyLogoComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'society-upload-logo',
    component: SocietyUploadLogoComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-city/:id',
    component: EditCityComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-role/:id',
    component: EditRoleComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-society-logo/:id',
    component: ViewSocietyLogoComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-city',
    component: EditCityComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'edit-pincode/:id',
    component: EditPincodeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-state/:id',
    component: EditStateComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-security-workers-kyc-doc',
    component: ViewSecurityWorkersKycDocComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-security-workers-kyc-doc/:id/:name',
    component: ViewSecurityWorkersKycDocComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'view-ticket-workers-kyc-doc',
    component: ViewTicketWorkersKycDocComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-ticket-workers-kyc-doc/:id/:name',
    component: ViewTicketWorkersKycDocComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'update-promotion',
    component: UpdatePromotionComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-society/:id',
    component: EditSocietyComponent,
    canActivate: [AuthenticationGuard],
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
    path: 'manager',
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
    path: 'view-workers-kyc/:id/:name',
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
    path: 'fp-verify-otp',
    component: FpVerifyOtpComponent,
    canActivate: [ExternalGuard],
  },
  {
    path: 'visitors-category',
    component: VisitorsCategoryComponent,
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [ExternalGuard],
  },

  {
    path: 'raised-Complaint',
    component: RaisedComplaintComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'addraised-Complaint',
    component: AddraisedComplaintComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'editraised-Complaint',
    component: EditraisedComplaintComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'editraised-Complaint/:id/:name',
    component: EditraisedComplaintComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'daily-helper-category',
    component: DailyHelperCategoryComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'adddaily-helper-category',
    component: AdddailyHelperCategoryComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'view-ticket-workers/:id',
    component: ViewTicketWorkersComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-security-workers/:id',
    component: ViewSecurityWorkersComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-security-workers-kyc/:id',
    component: ViewSecurityWorkersKycComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'view-ticket-workers-kyc/:id',
    component: ViewSecurityWorkersKycComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-visitor-category/:id',
    component: EditVisitorCategoryComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-visitor-category/:id/:name',
    component: EditVisitorCategoryComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'viewaily-helper-doc',
    component: ViewailyHelperDocComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
