import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css'],
})
export class RolelistComponent {
  constructor(private loginService: LoginService, private route: Router,public dialog: MatDialog) {}
  searchText: any;
 
  pages: number = 1;
  allstate: any;
  cityId!: string | null;
  allcity: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  allrole:any;
  rolename:any;
  roleId:any;
  RoleName:any
  RoleId:any

  ngOnInit(): void {

    this.loginService.allRole().subscribe((res: any) => {
      this.allrole = res.response;
      console.log(this.allrole);
    });

  
  }
  Editrole(id: string) {
    this.loginService.allRole().subscribe((res: any) => {
      this.allrole = res.response;

      this.RoleName = res.response[0].rolename;
      this.RoleId = res.response[0].roleId;

      this.route.navigate([`/edit-role/${id}`], {
        queryParams: { roleId: this.RoleId},
      });
      console.log('im param  Role  ' + res.response[0].roleId,res.response[0].roleName);
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

  

  DashboardComponent() {
    this.route.navigateByUrl(`/dashboard`);
  }
  SocietyComponent() {
    this.route.navigateByUrl(`/society`);
  }
  TransactionhitoryComponent() {
    this.route.navigateByUrl(`/transactionhistory`);
  }
  TicketsComponenets() {
    this.route.navigateByUrl(`/tickets`);
  }
  ManagerComponents() {
    this.route.navigateByUrl(`/manager`);
  }
  UsermanagementComponent() {
    this.route.navigateByUrl(`/usermanagement`);
  }
  ListcityComponent() {
    this.route.navigateByUrl(`/listcity`);
  }
  ListpincodeComponenet() {
    this.route.navigateByUrl(`/listpincode`);
  }
  AddRole()
  {
    this.route.navigateByUrl(`/addrole`);
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

}
