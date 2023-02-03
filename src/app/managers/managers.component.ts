import { managerBankDetail } from './../models/society.model';
import { Component, OnInit, VERSION } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css'],
})
export class ManagersComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router) {}
  allSociety: any;
  searchText: any;
  blockData: any;
  allManager: any;
  pages: number = 1;
  items = ['Main Master >'];
  itemss = ['User Management >'];
  items1 = ['Society Management >'];
  expandedIndex = 0;
  societyManagerId: any;

  ngOnInit(): void {
    this.loginService.allManagerPath().subscribe((res: any) => {
      this.allManager = res.response;
      console.log(res);
    });
  }
  onManagerId(id: string) {
    this.loginService.ManagerById(id).subscribe((res: any) => {
      this.onManagerId = res.response;
    });
  }
  bankDetail(id: string) {
    this.route.navigateByUrl(`viewmanager/${id}`);
    console.log(id)
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
  AddmanagerComponent()
  {
    this.route.navigateByUrl(`/addmanager`);
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
    this.route.navigateByUrl(`/visitor-category`);
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
}
