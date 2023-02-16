import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdduserComponent } from '../adduser/adduser.component';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  allUsers: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  searchText: any;
  constructor(private loginService: LoginService, private router: Router,public dialog: MatDialog) { }


  pages: number = 1;


  ngOnInit(): void {
    this.router.navigateByUrl('[/dashboard]') 

    this.loginService.getUserManagement().subscribe((res: any) => {
      this.allUsers = res.response;
      console.log(this.allUsers);
    });

  }
 
    viewuser(id: string) {
      console.log(id)
      this.router.navigateByUrl(`/viewuser/${id}`);
    }
   

    
 

    DashboardComponent()
    {
      this.router.navigateByUrl(`/dashboard`);
    }
    SocietyComponent()
    {
      this.router.navigateByUrl(`/society`);
    }
    TransactionhitoryComponent()
    {
      this.router.navigateByUrl(`/transactionhistory`);
    }
    TicketsComponenets()
    {
      this.router.navigateByUrl(`/tickets`);
    }
    ManagersComponents()
    {
      this.router.navigateByUrl(`/manager`);
    }
    UsermanagementComponent()
    {
      this.router.navigateByUrl(`/usermanagement`);
    }
    ListcityComponent()
    {
      this.router.navigateByUrl(`/listcity`);
    }
    ListpincodeComponenet()
    {
      this.router.navigateByUrl(`/listpincode`);
    }
    
    Dashboard()
    {
      this.router.navigateByUrl(`/dashboard`);
    }
    ListstateComponent()
    {
      this.router.navigateByUrl(`/liststate`);
    }
    RolelistComponent()
    {
      this.router.navigateByUrl(`/rolelist`);
    }
    SocietyBasedVisitorsComponent()
    {
      this.router.navigateByUrl(`/society-based-visitors`);
    }
    SocietyDailyWorkersComponent()
    {
      this.router.navigateByUrl(`/society-daily-workers`);
    }
    SocietyEmergencyContactComponent()
    {
      this.router.navigateByUrl(`/society-emergency-contact`);
    }
    SocietySecurityGuardComponent()
    {
      this.router.navigateByUrl(`/society-security-guard`);
    }
    SocietyTicketWorkersComponent()
    {
      this.router.navigateByUrl(`/society-ticket-workers`);
    }
    VisitorCategoryComponent()
    {
      this.router.navigateByUrl(`/visitors-category`);
    }
    ComplaintCategory()
    {
      this.router.navigateByUrl(`/raised-Complaint`);
    }
    DaikyHelp()
    {
      this.router.navigateByUrl(`/daily-helper-category`);
    }
    SocietyPromotion()
    {
      this.router.navigateByUrl(`/society-promotions`);
    }

    openDialog() {
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
}
