import { Component } from '@angular/core';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginService } from '../Services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-getallworker-time-slot',
  templateUrl: './getallworker-time-slot.component.html',
  styleUrls: ['./getallworker-time-slot.component.css']
})
export class GetallworkerTimeSlotComponent {
  constructor(private loginService: LoginService, private route: Router,public dialog: MatDialog) {}
  searchText: any;
 
  pages: number = 1;
  allstate: any;
  cityId!: string | null;
  allcity: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  societyid: any;
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  expandedIndex = 0;
  allrole:any;
  rolename:any;
  roleId:any;
  RoleName:any
  RoleId:any;
  allworker:any;

  ngOnInit(): void {

    this.loginService.getAllWorkerTimeSlot().subscribe((res: any) => {
      this.allworker = res.response;
      console.log(res);
    console.log(this.allworker)
    });

  
  }

  // onSubmit(value:boolean,id :string) {
  //   let submitModel: RoleStatus = {

  //     activeStatus: value? 1:0,
      
  //   };

  //   this.loginService
  //     .roleStatus( id, submitModel)
  //     .subscribe((res: any) => {
  //       console.log("im Status" +res)
        
     
  //     });
  // }
  Editrole(id: string) {
    this.loginService.allRole().subscribe((res: any) => {
      this.allrole = res.response;

   
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
wokerTimeSlot()
{
  this.route.navigateByUrl(`/worker-time-slot`);

}


AddCharges() {
  this.route.navigateByUrl(`/all-charges`);
}
AgreementType()
{
  this.route.navigateByUrl('/all-agreement-type');
}


}
