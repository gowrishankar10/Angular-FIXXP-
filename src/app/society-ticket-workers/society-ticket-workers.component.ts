import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-society-ticket-workers',
  templateUrl: './society-ticket-workers.component.html',
  styleUrls: ['./society-ticket-workers.component.css']
})
export class SocietyTicketWorkersComponent {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}

  getSociety:any;
  IdSociety:any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  pages: number = 1;
  searchText: any;
  societyId:any;
  societyTicketWorkers:any;
  allSocietyTicketWorkers:any;
  workerId:any;

  ngOnInit(): void {

    this.loginService.getAllSociety().subscribe((res:any)=>
    {
      this.getSociety=res.response;
      console.log(res)
    })

  
  }

  societyvisit()
  {
    this.loginService.societyTicketWokers(this.societyId).subscribe((res:any)=>
    {
      this.allSocietyTicketWorkers=res.response;
      console.log(res)
    })
  }

  viewworkerId(id: string) {
    this.route.navigateByUrl(`/view-ticket-workers/${id}`);
    this.workerId = id;

  }
  kycDetail(id: string) {
  
    this.route.navigateByUrl(`/view-ticket-workers-kyc/${id}`);
  
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
}
