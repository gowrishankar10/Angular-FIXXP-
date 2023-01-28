import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AddpincodeComponent } from '../addpincode/addpincode.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listpincode',
  templateUrl: './listpincode.component.html',
  styleUrls: ['./listpincode.component.css']
})
export class ListpincodeComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router,public dialog: MatDialog) { }
  selectedOption: number = 1;
  searchText: any;
  allSociety: any;
  allBlockData: any; 
  pages: number = 1;
  cityId!: string | null;
  allcity: any;
  allPinCode:any;
  pinCodeId: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  
  ngOnInit(): void {
    this.onPincode(1);
    this.loginService.getallcity().subscribe((res: any) => {
      this.allcity = res.response;
      console.log(this.allcity);
    });
}



  onPincode(defaultId?: number) {
    console.log(this.pinCodeId)
    this.loginService.getpincode(defaultId || this.pinCodeId).subscribe((res: any) => {
      this.allPinCode = res.response;
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


// openDialog() {
//   const dialogRef = this.dialog.open(AddpincodeComponent);

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(`Dialog result: ${result}`);
//   });
// }


}