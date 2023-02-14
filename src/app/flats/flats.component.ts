import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';
@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute) { }
  items = ['Main Master'];
  itemss = ['User Management'];
  expandedIndex = 0;
  items1 = ['Society Management'];
  getallFlats:any;
  searchText:any;
  pages: number = 1;
  ngOnInit(): void {

    this.AR.params.subscribe((param: any) => {
      this.Flats(param.id)
    })
  }

  Flats(id: string) {
    this.loginService.getFlats(id).subscribe((res: any) => {
      this.getallFlats = res.response;
      console.log(this.getallFlats);
    });
  }

  onflatuser(id: string) {
    console.log(id)
    this.route.navigateByUrl(`flatusers/${id}`);
  }
  DashboardComponent()
  {
    this.route.navigateByUrl(`/dashboard`);
  }
  SocietyComponent()
  {
    this.route.navigateByUrl(`/society`);
  }
  BlockComponent(id:string){
    this.route.navigateByUrl(`/block/${id}`);
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
