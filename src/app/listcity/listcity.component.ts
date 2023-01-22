import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AddcityComponent } from '../addcity/addcity.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-listcity',
  templateUrl: './listcity.component.html',
  styleUrls: ['./listcity.component.css']
})
export class ListcityComponent implements OnInit {
select: any;
selectYourstate: any;

  constructor(private loginService: LoginService, private route: Router,public dialog: MatDialog) { }
  searchText: any;
  allSociety: any;
  allBlockData: any;
  pages: number = 1;
  allstate:any;
  cityId!: number | null;
  allcity: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  selectedOption: number = 1;
  

  ngOnInit(): void {
    this.onCity(1);
    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
    });

}
onCity(defaultId?: number) {
  console.log(this.cityId);
  this.loginService.getallcityid(defaultId || this.cityId).subscribe((res: any) => {
    this.allcity = res.response;
  });
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


// openDialog() {
//   const dialogRef = this.dialog.open(AddcityComponent);

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(`Dialog result: ${result}`);
//   });
// }
}
