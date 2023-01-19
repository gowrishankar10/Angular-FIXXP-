import { Component,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-society-emergency-contact',
  templateUrl: './society-emergency-contact.component.html',
  styleUrls: ['./society-emergency-contact.component.css']
})
export class SocietyEmergencyContactComponent {

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
  allSocietyEmergency:any;

  ngOnInit(): void {

    this.loginService.getAllSociety().subscribe((res:any)=>
    {
      this.getSociety=res.response;
      console.log(res)
    })

  
  }

  societyvisit()
  {
    this.loginService.societyEmergency(this.societyId).subscribe((res:any)=>
    {
      this.allSocietyEmergency=res.response;
      console.log(res)
    })
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
