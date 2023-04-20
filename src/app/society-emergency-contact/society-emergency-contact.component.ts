import { Component,OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-society-emergency-contact',
  templateUrl: './society-emergency-contact.component.html',
  styleUrls: ['./society-emergency-contact.component.css']
})
export class SocietyEmergencyContactComponent {
  successMessage: any;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute,
    private toastr: ToastrService,private dialog: MatDialog
  ) {}

  getSociety:any;
  IdSociety:any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  expandedIndex = 0;
  pages: number = 1;
  searchText: any;
  societyId:any;
  allSocietyEmergency:any;
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  ngOnInit(): void {

    this.loginService.getAllSociety().subscribe((res:any)=>
    {
      this.getSociety=res.response;
      console.log(res)
      this.toastr.info(res.message);
    })

  
  }

  societyvisit() {
    this.loginService.societyEmergency(this.societyId).subscribe((res: any) => {
      this.allSocietyEmergency = res.response;
      console.log(res.message);
      if (res.flag === 2) {
        this.toastr.info(res.message);
      }
    });
  }
  ChangePasswordopenDialog() {
    const dialogRef = this.dialog.open(ChangepasswordComponent);
        dialogRef.afterClosed().subscribe((result) => {
          console.log(`Dialog result: ${result}`);
        });
      }
  
  logout() {
    this.loginService.logout();
  }
  openDialogss() {
    const dialogRef = this.dialog.open(ChangepasswordComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(ProfileComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  AllvsitorsType()
  {
    this.route.navigateByUrl(`/all-visitors-type`);
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

AddSocietyComponent()
{
  this.route.navigateByUrl(`/addsociety`);
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
CreateProfile()
{
  this.route.navigateByUrl(`/all-admin`);
} 
WorkerTransaction()
{
  this.route.navigateByUrl(`/all-worker-transaction`);
}
StampPaper() {
  this.route.navigateByUrl(`/stamp-paper`);

}
HomeTransaction()
{
this.route.navigateByUrl(`/home-transaction`);
}
}
