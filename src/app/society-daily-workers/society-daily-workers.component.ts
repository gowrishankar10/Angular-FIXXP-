import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
import { DailyHelperStatus } from '../models/society.model';

@Component({
  selector: 'app-society-daily-workers',
  templateUrl: './society-daily-workers.component.html',
  styleUrls: ['./society-daily-workers.component.css'],
})
export class SocietyDailyWorkersComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute,
    private toastr: ToastrService,private dialog: MatDialog
  ) {}

  getSociety: any;
  IdSociety: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  expandedIndex = 0;
  pages: number = 1;
  searchText: any;
  societyId: any;
  allSocietyWorkers: any;
  KycDetail: any;
  workerId: any;
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  ngOnInit(): void {
    this.loginService.getAllSociety().subscribe((res: any) => {
      this.getSociety = res.response;
      // console.log(res)
      this.toastr.info(res.message);
    });
  }

  societyvisit() {
    this.loginService
      .societyDailyWokers(this.societyId)
      .subscribe((res: any) => {
        this.allSocietyWorkers = res.response;
        console.log('im sts ' + this.allSocietyWorkers);

        console.log('im sts ' + res.response);
        if (res.flag === 2) {
          this.toastr.error(res.message);
        }
      });
  }

  onSubmit(value: boolean, id: string) {
    let submitModel: DailyHelperStatus = {
      activeStatus: value ? 1 : 0,
    };

    this.loginService.blockStatus(id, submitModel).subscribe((res: any) => {
      console.log('im Status' + res);
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

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProfileComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  AllvsitorsType() {
    this.route.navigateByUrl(`/all-visitors-type`);
  }
  viewworkerId(id: string) {
    this.route.navigateByUrl(`/view-workers/${id}`);
    this.workerId = id;
  }

  kycDetail(id: string) {
    this.route.navigateByUrl(`/daily-helpers-kyc/${id}`);
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
  AddWorkers() {
    this.route.navigateByUrl(`/addworkers`);
  }
  Dashboard() {
    this.route.navigateByUrl(`/dashboard`);
  }
  ListstateComponent() {
    this.route.navigateByUrl(`/liststate`);
  }
  RolelistComponent() {
    this.route.navigateByUrl(`/rolelist`);
  }
  SocietyBasedVisitorsComponent() {
    this.route.navigateByUrl(`/society-based-visitors`);
  }
  SocietyDailyWorkersComponent() {
    this.route.navigateByUrl(`/society-daily-workers`);
  }
  SocietyEmergencyContactComponent() {
    this.route.navigateByUrl(`/society-emergency-contact`);
  }
  SocietySecurityGuardComponent() {
    this.route.navigateByUrl(`/society-security-guard`);
  }
  SocietyTicketWorkersComponent() {
    this.route.navigateByUrl(`/society-ticket-workers`);
  }
  VisitorCategoryComponent() {
    this.route.navigateByUrl(`/visitors-category`);
  }
  ComplaintCategory() {
    this.route.navigateByUrl(`/raised-Complaint`);
  }
  DaikyHelp() {
    this.route.navigateByUrl(`/daily-helper-category`);
  }
  SocietyPromotion() {
    this.route.navigateByUrl(`/society-promotions`);
  }
  DueAmount() {
    this.route.navigateByUrl(`/due-amount`);
  }
  CreateProfile() {
    this.route.navigateByUrl(`/all-admin`);
  }
  WorkerTransaction() {
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
  WorkersSlot()
{
  this.route.navigateByUrl('/getallworker-time-slot')
}


}
