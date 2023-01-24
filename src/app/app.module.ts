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


  ],
  imports: [

  
    FormsModule,
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
    TextFieldModule,
    

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
    AuthenticationGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
