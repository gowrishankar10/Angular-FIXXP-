import { EditraisedComplaintComponent } from './../editraised-complaint/editraised-complaint.component';
import { Component,OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddraisedComplaintComponent } from '../addraised-complaint/addraised-complaint.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-raised-complaint',
  templateUrl: './raised-complaint.component.html',
  styleUrls: ['./raised-complaint.component.css']
})
export class RaisedComplaintComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router
   
      ,public dialog: MatDialog,
      private AR: ActivatedRoute
)  {}
  pages: number = 1;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  expandedIndex = 0;
  AllRaisedCategory:any;
  searchText:any

  ngOnInit(): void {
      

    this.loginService.getAllRaisedCategory().subscribe((res:any)=>
    {
      this.AllRaisedCategory =  res.response;
    })
  }

  edits(id: string, name:string)
  {
    this.route.navigateByUrl(`/editraised-Complaint/${id}/${name}`)

    console.log(id)
    console.log(name)
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

  
AddraisedComplaintComponent(){
  this.route.navigateByUrl(`/addraised-Complaint`);
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
  CreateProfile()
  {
    this.route.navigateByUrl(`/all-admin`);
  } 
  WorkerTransaction()
  {
    this.route.navigateByUrl(`/worker-transaction-history`);
  }
 
  StampPaper() {
    this.route.navigateByUrl(`/stamp-paper`);
  
  }
  HomeTransaction()
  {
  this.route.navigateByUrl(`/home-transaction`);
  }
  RentPay()
{
this.route.navigateByUrl(`/rent-pay`);
}
}

