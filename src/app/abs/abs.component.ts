import { Component, OnInit ,VERSION  } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-abs',
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.css']
})
export class AbsComponent  {
  constructor(private loginService: LoginService, private route: Router) { }

  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  searchText:any;
  allManager:any;
  pages: number = 1;
  ngOnInit(): void {
    this.route.navigateByUrl('[/dashboard]')

    this.loginService.allManagerPath().subscribe((res: any) =>
    {
      this.allManager =  res.response;
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
Transactionhitoryomponent()
{
  this.route.navigateByUrl(`/tranasactionhistory`);
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