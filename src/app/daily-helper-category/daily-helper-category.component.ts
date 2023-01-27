import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
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
itemss = ['User Management '];
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



DashboardComponent()
{
  this.route.navigateByUrl(`/dashboard`);
}
SocietyComponent()
{
  this.route.navigateByUrl(`/society`);
}
TransactionhistoryComponent()
{
  this.route.navigateByUrl(`/transactionhistory`);
}
TicketsComponenets()
{
  this.route.navigateByUrl(`/tickets`);
}
ManagersComponent()
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


