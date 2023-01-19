import { AbstractType, Component,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AnyARecord } from 'dns';
@Component({
  selector: 'app-society-based-visitors',
  templateUrl: './society-based-visitors.component.html',
  styleUrls: ['./society-based-visitors.component.css']
})
export class SocietyBasedVisitorsComponent implements OnInit{

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
  allsocietyvisitor:any;

  ngOnInit(): void {

    this.loginService.getAllSociety().subscribe((res:any)=>
    {
      this.getSociety=res.response;
      console.log(res)
    })

  
  }

  societyvisit()
  {
    this.loginService.societyVisitor(this.societyId).subscribe((res:any)=>
    {
      this.allsocietyvisitor=res.response;
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
