import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpincode',
  templateUrl: './listpincode.component.html',
  styleUrls: ['./listpincode.component.css']
})
export class ListpincodeComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router,public dialog: MatDialog,private toastr: ToastrService) { }

  searchText: any;
  allSociety: any;
  allBlockData: any; 
  pages: number = 1;
  cityId!: string | null;
  allcity: any;
  allPinCode:any;
  pinCodeId: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  delpincode:any;
  
  ngOnInit(): void {

    this.loginService.getallcity().subscribe((res: any) => {
      this.allcity = res.response;
      console.log(this.allcity);
    });
}



  onPincode() {
    console.log(this.pinCodeId)
    this.loginService.getpincode(this.pinCodeId).subscribe((res: any) => {
      this.allPinCode = res.response;
      if (res.flag === 2) {
        this.toastr.error(res.message);
      }    
    })
}
deletePincode(id:string){
  this.loginService.deletecity(id).subscribe((res:any)=>{
    this.delpincode = res.response;
    if (res.flag === 1) {
      this.toastr.info(res.message);

    } else if (res.flag === 2) {
      this.toastr.error('It has been deleted');

    }
  })
}


editpincode(id: string)
    {
      this.route.navigateByUrl(`/edit-pincode/${id}`)
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
Addpincode()
  {
    this.route.navigateByUrl(`/addpincode`);
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


// openDialog() {
//   const dialogRef = this.dialog.open(AddpincodeComponent);

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(`Dialog result: ${result}`);
//   });
// }


