import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-society-daily-workers',
  templateUrl: './society-daily-workers.component.html',
  styleUrls: ['./society-daily-workers.component.css'],
})
export class SocietyDailyWorkersComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
    ,private toastr: ToastrService,
  ) {}
  selectedOption: number = 1;
  getSociety: any;
  IdSociety: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  items1 = ['Society Management >'];
  expandedIndex = 0;
  pages: number = 1;
  searchText: any;
  societyId: any;
  allSocietyWorkers: any;
  KycDetail: any;
  workerId: any;

  ngOnInit(): void {
    this.societyWorkers(1);
    this.loginService.getAllSociety().subscribe((res: any) => {
      this.getSociety = res.response;
      console.log(res);

   
    });
  }

  societyWorkers(defaultId?: number) {
    this.loginService
      .societyDailyWokers( defaultId || this.societyId)
      .subscribe((res: any) => {
        this.allSocietyWorkers = res.response;
        if (res.flag === 2) {
          this.toastr.error(res.message);
        }
        console.log(res);
      });
  }
  viewworkerId(id: string) {
    this.route.navigateByUrl(`/view-workers/${id}`);
    this.workerId = id;
  }

  kycDetail(id: string) {
    this.route.navigateByUrl(`/daily-helpers-kyc/${id}`);
  
  }


  DashboardComponent()
{
  this.route.navigateByUrl(`/dashboard`);
}
SocietyComponent()
{
  this.route.navigateByUrl(`/society`);
}
TransactionhitoryComponent()
{
  this.route.navigateByUrl(`/transactionhistory`);
}
TicketsComponenets()
{
  this.route.navigateByUrl(`/tickets`);
}
ManagerComponents()
{
  this.route.navigateByUrl(`/manager`);
}
UsermanagementComponent()
{
  this.route.navigateByUrl(`/usermanagement`);
}
ListcityComponent()
{
  this.route.navigateByUrl(`/listcity`);
}
ListpincodeComponenet()
{
  this.route.navigateByUrl(`/listpincode`);
}
AddWorkers()
{
  this.route.navigateByUrl(`/addworkers`);
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
}
