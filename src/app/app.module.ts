import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SocietyComponent } from './society/society.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BlockComponent } from './block/block.component';
import { FlatsComponent } from './flats/flats.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { FlatusersComponent } from './flatusers/flatusers.component';
import { MatTableModule } from '@angular/material/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { AgnysComponent } from './agnys/agnys.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IdbyusernameComponent } from './idbyusername/idbyusername.component';
import { SocietysearchComponent } from './societysearch/societysearch.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddsocietyComponent } from './addsociety/addsociety.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddcityComponent } from './addcity/addcity.component';
import { ListcityComponent } from './listcity/listcity.component';
import { ListpincodeComponent } from './listpincode/listpincode.component';
import { AddpincodeComponent } from './addpincode/addpincode.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AgmCoreModule } from '@agm/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ManagersComponent } from './managers/managers.component';
import { AddmanagerComponent } from './addmanager/addmanager.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthenticationGuard } from './Authguard/authentication.guard';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddmanagerbankdetailComponent } from './addmanagerbankdetail/addmanagerbankdetail.component'; 
import { AbsComponent } from './abs/abs.component';
import { ViewmanagerComponent } from './viewmanager/viewmanager.component';
import {MatCardModule} from '@angular/material/card';
import {TextFieldModule} from '@angular/cdk/text-field';
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
import { BnNgIdleService } from 'bn-ng-idle';
import { UpdatePromotionComponent } from './update-promotion/update-promotion.component';
import { EditSocietyComponent } from './edit-society/edit-society.component';
import { EditCityComponent } from './edit-city/edit-city.component';
import { EditPincodeComponent } from './edit-pincode/edit-pincode.component';
import { EditStateComponent } from './edit-state/edit-state.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { ViewSocietyLogoComponent } from './view-society-logo/view-society-logo.component';
import { CheckSocietyLogoComponent } from './check-society-logo/check-society-logo.component';
import { SocietyUploadLogoComponent } from './society-upload-logo/society-upload-logo.component';
import { ResendOtpComponent } from './resend-otp/resend-otp.component';
import { VisitorsImageComponent } from './visitors-image/visitors-image.component';
import { CheckvisitorsimageComponent } from './checkvisitorsimage/checkvisitorsimage.component';
import { DueAmountComponent } from './due-amount/due-amount.component';
import { InvoicePdfComponent } from './invoice-pdf/invoice-pdf.component';
import { ViewDueAmountComponent } from './view-due-amount/view-due-amount.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SettlementUpdateComponent } from './settlement-update/settlement-update.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { AllAdminComponent } from './all-admin/all-admin.component';
import { WorkerTransactionHistoryComponent } from './worker-transaction-history/worker-transaction-history.component';
import { ViewWorkerTransactionsComponent } from './view-worker-transactions/view-worker-transactions.component';
import { UiSwitchModule } from 'ngx-toggle-switch';
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
import { StatestatusComponent } from './statestatus/statestatus.component';
import { PincodeStatusComponent } from './pincode-status/pincode-status.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SocietyComponent,
    ProfileComponent,
    TicketsComponent,
    BlockComponent,
    FlatsComponent,
    UsermanagementComponent,
    FlatusersComponent,
    AgnysComponent,
    IdbyusernameComponent,
    SocietysearchComponent,
    TransactionhistoryComponent,
    AddsocietyComponent,
    AddcityComponent,
    ListcityComponent,
    ListpincodeComponent,
    AddpincodeComponent,
    ViewuserComponent,
    ManagersComponent,
    AddmanagerComponent,
    AdminloginComponent,
    AddmanagerbankdetailComponent,
    AbsComponent,
    ViewmanagerComponent,
    RolelistComponent,
    AddroleComponent,
    AddstateComponent,
    ListstateComponent,
    SocietyDailyWorkersComponent,
    SocietyBasedVisitorsComponent,
    SocietyEmergencyContactComponent,
    SocietyTicketWorkersComponent,
    SocietySecurityGuardComponent,
    SocietyPromotionsComponent,
    ViewWorkersComponent,
    DailyHelpersKycComponent,
    SecurityGuardKycComponent,
    ViewWorkersKycComponent,
    AddvisitorComponent,
    FpVerifyEmailComponent,
    FpVerifyOtpComponent,
    VisitorsCategoryComponent,
    ChangepasswordComponent,
    ResetPasswordComponent,
    RaisedComplaintComponent,
    AddraisedComplaintComponent,
    EditraisedComplaintComponent,
    DailyHelperCategoryComponent,
    AdddailyHelperCategoryComponent,
    ViewTicketWorkersComponent,
    ViewSecurityWorkersComponent,
    ViewSecurityWorkersKycComponent,
    ViewTicketWorkersKycComponent,
    EditVisitorCategoryComponent,
    ViewailyHelperDocComponent,
    ViewTicketWorkersKycDocComponent,
    ViewSecurityWorkersKycDocComponent,
    UpdatePromotionComponent,
    EditSocietyComponent,
    EditCityComponent,
    EditPincodeComponent,
    EditStateComponent,
    EditRoleComponent,
    ViewSocietyLogoComponent,
    CheckSocietyLogoComponent,
    SocietyUploadLogoComponent,
    ResendOtpComponent,
    VisitorsImageComponent,
    CheckvisitorsimageComponent,
    DueAmountComponent,
    InvoicePdfComponent,
    ViewDueAmountComponent,
    AdminProfileComponent,
    SettlementUpdateComponent,
    ListAdminComponent,
    AllAdminComponent,
    WorkerTransactionHistoryComponent,
    ViewWorkerTransactionsComponent,
    ViewSocietyManagerKycComponent,
    ViewKycManagerComponent,
    ManagerKycApproveComponent,
    AllWorkerTransactionComponent,
    AddChargesComponent,
    AllChargesComponent,
    EditChargesComponent,
    StampPaperComponent,
    AddStampPaperComponent,
    EditStampPaperComponent,
    UserKycComponent,
    FlatUserKycComponent,
    EditDailyHelpesComponent,
    AllVisitorsTypeComponent,
    AddVisitorsTypeComponent,
    AllUsersKycComponent,
    AllUsersKycDocsComponent,
    EditProfileComponent,
    EditManagerComponent,
    StatestatusComponent,
    PincodeStatusComponent,
    
   


  ],
  imports: [

    UiSwitchModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CdkTreeModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    MatPaginatorModule,
    JwPaginationModule,
    NgxPaginationModule,
    MatSnackBarModule,
    CdkAccordionModule,
    MatIconModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatCardModule,
    TextFieldModule,MatTooltipModule,
    

    ToastrModule.forRoot(),
    
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE API KEY',
      libraries: ['places']
    }),
    ModalModule.forRoot(),

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    

  ],
  providers: [
    AuthenticationGuard,
    BnNgIdleService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
