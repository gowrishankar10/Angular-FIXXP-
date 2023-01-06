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
    AdminloginComponent


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
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE API KEY',
      libraries: ['places']
    }),
    ModalModule.forRoot(),

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
