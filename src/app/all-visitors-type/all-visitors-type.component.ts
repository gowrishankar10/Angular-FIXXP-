import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-all-visitors-type',
  templateUrl: './all-visitors-type.component.html',
  styleUrls: ['./all-visitors-type.component.css']
})
export class AllVisitorsTypeComponent {
  constructor(private loginService: LoginService, private route: Router) {}
  searchText: any;
 
  pages: number = 1;
  allstate: any;
  cityId!: string | null;
  allcity: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  allrole:any;
  rolename:any;
  roleId:any;
  RoleName:any
  RoleId:any

  ngOnInit(): void {

    this.loginService.allvisitortype().subscribe((res: any) => {
      this.allrole = res.response;
      console.log(this.allrole);
    });

  
  }
  Editrole(id: string) {
    this.loginService.allvisitortype().subscribe((res: any) => {
      this.allrole = res.response;

      this.RoleName = res.response[0].rolename;
      this.RoleId = res.response[0].roleId;

      this.route.navigate([`/edit-role/${id}`], {
        queryParams: { roleId: this.RoleId},
      });
      console.log('im param  Role  ' + res.response[0].roleId,res.response[0].roleName);
    });
  }

  AddRole()
  {
    this.route.navigateByUrl(`/add-visitors-type`);
  }


  

  DashboardComponent() {
    this.route.navigateByUrl(`/dashboard`);
  }
  SocietyComponent() {
    this.route.navigateByUrl(`/society`);
  }
  TransactionhitoryComponent() {
    this.route.navigateByUrl(`/transactionhistory`);
  }
  TicketsComponenets() {
    this.route.navigateByUrl(`/tickets`);
  }
  ManagerComponents() {
    this.route.navigateByUrl(`/manager`);
  }
  UsermanagementComponent() {
    this.route.navigateByUrl(`/usermanagement`);
  }
  ListcityComponent() {
    this.route.navigateByUrl(`/listcity`);
  }
  ListpincodeComponenet() {
    this.route.navigateByUrl(`/listpincode`);
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
  VisitorCategoryComponent()
  {
    this.route.navigateByUrl(`/visitors-category`);
  }
  ComplaintCategory()
  {
    this.route.navigateByUrl(`/raised-Complaint`);
  }
  DaikyHelp()
  {
    this.route.navigateByUrl(`/daily-helper-category`);
  }
  SocietyPromotion()
  {
    this.route.navigateByUrl(`/society-promotions`);
  }
  DueAmount()
  {
    this.route.navigateByUrl(`/due-amount`);
  }
}
