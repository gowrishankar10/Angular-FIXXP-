import { UpdateUser } from './../models/society.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdduserComponent } from '../adduser/adduser.component';
import { ProfileComponent } from '../profile/profile.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css'],
})
export class UsermanagementComponent implements OnInit {
  allUsers: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];

  expandedIndex = 0;
  ProfileId: any = localStorage.getItem('id');

  searchText: any;
  isactive : boolean=true
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  constructor(private loginService: LoginService, private route: Router,public dialog: MatDialog) { }


  pages: number = 1;

  ngOnInit(): void {

    this.loginService.getUserManagement().subscribe((res: any) => {
      this.allUsers = res.response;
      console.log(this.allUsers);
    });
  }

  userActive(id: string) {}

  viewuser(id: string) {
    console.log(id);
    this.route.navigateByUrl(`/viewuser/${id}`);
  } 
  viewuserKYc(id: string) {
    console.log(id);
    this.route.navigateByUrl(`/all-users-kyc/${id}`);
  } 


  onSubmit() {
    let submitModel: UpdateUser = {
      userStatus: this.isactive,
    };
    this.loginService
      .userActive(this.ProfileId, submitModel)
      .subscribe((res: any) => {});
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
    ManagersComponents()
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
    openDialog1() {
      const dialogRef = this.dialog.open(AdduserComponent);
    
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  openDialogs() {
    const dialogRef = this.dialog.open(ProfileComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
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
  WorkersSlot()
{
  this.route.navigateByUrl('/getallworker-time-slot')
}
AddCharges() {
  this.route.navigateByUrl(`/all-charges`);
}


AgreementType()
{
  this.route.navigateByUrl('/all-agreement-type');
}


}
