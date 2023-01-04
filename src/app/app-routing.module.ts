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




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'society', component: SocietyComponent, },
  { path: 'profile', component: ProfileComponent, },
  { path: 'block/:id', component: BlockComponent, },
  { path: 'tickets', component: TicketsComponent, },
  { path: 'flats/:id', component: FlatsComponent, },
  { path: 'usermanagement', component: UsermanagementComponent, },
  { path: 'flatusers/:id', component: FlatusersComponent, },
  { path: 'flatusers', component: FlatusersComponent, },
  { path: 'addcity', component: AddcityComponent, },
  { path: 'addsociety', component: AddsocietyComponent, },
  { path: 'addsociety/:id/:name', component: AddsocietyComponent, },
  { path: 'societysearch', component: SocietysearchComponent, },
  { path: 'listpincode', component: ListpincodeComponent, },
  { path: 'listcity', component: ListcityComponent, },
  { path: 'addpincode', component: AddpincodeComponent, },
  { path: 'transactionhistory', component: TransactionhistoryComponent, },
  { path: 'agnys', component: AgnysComponent, },
  { path: 'viewuser/:id', component: ViewuserComponent, },
  { path: 'managers', component: ManagersComponent, },
  { path: 'addmanager', component: AddmanagerComponent, },















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }