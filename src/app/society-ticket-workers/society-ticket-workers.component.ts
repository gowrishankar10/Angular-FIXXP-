import { Component } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-society-ticket-workers',
  templateUrl: './society-ticket-workers.component.html',
  styleUrls: ['./society-ticket-workers.component.css'],
})
export class SocietyTicketWorkersComponent {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  getSociety: any;
  IdSociety: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  pages: number = 1;
  searchText: any;
  societyId: any;
  societyTicketWorkers: any;
  allSocietyTicketWorkers: any;

  ngOnInit(): void {
    this.loginService
    .getAllSociety()
    .subscribe((res: any) => {
      this.getSociety = res.response;
      console.log(res);
    });
  }

  societyvisit() {
    this.loginService
      .societyTicketWokers(this.societyId)
      .subscribe((res: any) => {
        
        console.log(res)
        this.allSocietyTicketWorkers = res.response;
        console.log(res.message);
        if (res.flag === 2) {
          this.toastr.error(res.message);

        }
      });
  }

  viewTicketWorkers(id:String)
  {
    this.route.navigateByUrl(`view-ticket-workers/${id}`)
  }
   viewTicketWorkersKYC(id:String)
  {
    this.route.navigateByUrl(`view-ticket-workers-kyc/${id}`)
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

  AddVisitors() {
    this.route.navigateByUrl(`/addvisitors`);
  }
  Dashboard() {
    this.route.navigateByUrl(`/dashboard`);
  }
  ListstateComponent() {
    this.route.navigateByUrl(`/liststate`);
  }
  RolelistComponent() {
    this.route.navigateByUrl(`/rolelist`);
  }
  SocietyBasedVisitorsComponent() {
    this.route.navigateByUrl(`/society-based-visitors`);
  }
  SocietyDailyWorkersComponent() {
    this.route.navigateByUrl(`/society-daily-workers`);
  }
  SocietyEmergencyContactComponent() {
    this.route.navigateByUrl(`/society-emergency-contact`);
  }
  SocietySecurityGuardComponent() {
    this.route.navigateByUrl(`/society-security-guard`);
  }
  SocietyTicketWorkersComponent() {
    this.route.navigateByUrl(`/society-ticket-workers`);
  }
  VisitorCategoryComponent() {
    this.route.navigateByUrl(`/visitors-category`);
  }
  ComplaintCategory() {
    this.route.navigateByUrl(`/raised-Complaint`);
  }
  DaikyHelp() {
    this.route.navigateByUrl(`/daily-helper-category`);
  }
  SocietyPromotion() {
    this.route.navigateByUrl(`/society-promotions`);
  }
  DueAmount() {
    this.route.navigateByUrl(`/due-amount`);
  }
}
