import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { AddStampPaper, EditStampPaper } from '../models/society.model';
import { ProfileComponent } from '../profile/profile.component';
import { LoginService } from '../services/Login Service/login.service';
@Component({
  selector: 'app-edit-stamp-paper',
  templateUrl: './edit-stamp-paper.component.html',
  styleUrls: ['./edit-stamp-paper.component.css']
})
export class EditStampPaperComponent {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute,public dialog: MatDialog
  ) {}
  Stamp:any
  allSociety: any;
  societyId: any;
  successMessage: any;
  stampSizePaperAmount: any;
  gstPercentage: any;
  sgstPercentage: any;
  igstPercentage: any;
  courierCharge: any;
  otherCharge: any;
  mySociety: any;
  createdBy: any=localStorage.getItem('name');
  RelationshipStatus: any;
  EmergencyContactName: any;
  EmergencyContactNumber: any;
  HospitalNumber:any;
  HospitalName:any;
  
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];

  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  expandedIndex = 0;

  ngOnInit() {

    this.activeRouter.queryParams.subscribe((param: any) => {
      this.Stamp = param.editId;
      console.log('OTP page ' + this.Stamp);
    });

    
    this.loginService.getAllSociety().subscribe((res: any) => {
      this.allSociety = res.response;
      console.log(this.allSociety);
    });
  }
  onSociety(id: string) {
    this.societyId = id;
  }

  onSubmitButton() {
    let submitModel: EditStampPaper = {
      stampSizePaperAmount: this.stampSizePaperAmount || null,

      modifiedBy: this.createdBy || null,

      

 
    };

    this.loginService
      .EditStampPapers(this.Stamp,submitModel)
      .subscribe((res: any) => {
        this.successMessage = res.message;
        if (this.successMessage) {
          this.route.navigateByUrl('stamp-paper');
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
StampPaper() {
  this.route.navigateByUrl(`/stamp-paper`);

}
WorkerTransaction()
  {
    this.route.navigateByUrl(`/all-worker-transaction`);
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
