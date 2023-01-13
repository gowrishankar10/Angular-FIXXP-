import { NgModule } from '@angular/core';
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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'adminlogin', component: AdminloginComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
