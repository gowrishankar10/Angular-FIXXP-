import { Component } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-daily-helper-category',
  templateUrl: './daily-helper-category.component.html',
  styleUrls: ['./daily-helper-category.component.css']
})
export class DailyHelperCategoryComponent {
  constructor(private loginService: LoginService, private route: Router
   
    ,public dialog: MatDialog,
    private AR: ActivatedRoute
)  {}
pages: number = 1;
items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
expandedIndex = 0;
AllRaisedCategory:any;
searchText:any

ngOnInit(): void {
    

  this.loginService.dailyhelperCategory().subscribe((res:any)=>
  {
    this.AllRaisedCategory =  res.response;
  })
}

edit(id: string, name:string)
{
  this.route.navigateByUrl(`/editraised-Complaint/${id}/${name}`)

  console.log(id)
  console.log(name)
}

AddDailyHelper(){
  this.route.navigateByUrl(`/adddaily-helper-category`)
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
  AddcityComponent()
  {
    this.route.navigateByUrl(`/addcity`); 
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


