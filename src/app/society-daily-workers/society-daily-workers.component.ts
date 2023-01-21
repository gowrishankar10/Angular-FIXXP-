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
  ) {}

  getSociety: any;
  IdSociety: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  pages: number = 1;
  searchText: any;
  societyId: any;
  allSocietyWorkers: any;
  KycDetail: any;
  workerId: any;

  ngOnInit(): void {
    this.loginService.getAllSociety().subscribe((res: any) => {
      this.getSociety = res.response;
      console.log(res);

   
    });
  }

  societyWorkers() {
    this.loginService
      .societyDailyWokers(this.societyId)
      .subscribe((res: any) => {
        this.allSocietyWorkers = res.response;
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
}
