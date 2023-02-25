import { CreateProfile } from './../models/society.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';
import { EChartsOption } from 'echarts';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  options: EChartsOption = {
    color: ['#031a7d'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '20%',
      containLabel: true,
    },
  };
  loginForm: any;
  error: unknown;
  pincode: any;
  chpasswd: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public dialog: MatDialog,
    private AR: ActivatedRoute
  ) {}
  AlldashboardData: any;
  alltransaction: any;
  allstate: any;
  allcity: any;
  allPinCode: any;
  cityId: any;
  pinCodeId: any;
  IdByCount: any;
  stateId: any;
  Changepass: any;
  chgPass: any;
  Profile: any;
  AllProfile: any;
  myAllProfile: any;
  Logged: any = localStorage.getItem('lastLogedon');
  Name: any = localStorage.getItem('name');

  ngOnInit(): void {
    this.loginService.GetAllProfile().subscribe((res: any) => {
      this.myAllProfile = res.response;
    });

    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
    });

    this.loginService.getdashboard().subscribe((res: any) => {
      this.AlldashboardData = res.response;
      console.log(res);
    });
    this.loginService.getAllTransaction().subscribe((res: any) => {
      this.options.xAxis = [
        {
          type: 'category',
          data: [
            'jan',
            'feb',
            'apr',
            'march',
            'may ',
            'june',
            'july',
            'aug',
            'sep',
            'oct',
            'nov',
            'dec',
          ],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ];
      this.options.yAxis = [
        {
          type: 'value',
        },
      ];
      console.log(res);
    });
    this.options.series = [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '20%',
        data: [
          2000, 2500, 3000, 5676.6676, 7877, 8766, 2344, 1234, 1234, 3456, 6345,
          5666,
        ],
      },
    ];
  }

  adminProfile(id: string) {
    this.loginService.adminprifileid(id).subscribe((res: any) => {
      this.AllProfile = res.response;
      console.log('profile' + id);
    });
  }

  adminnavigate() {
    this.router.navigateByUrl('/changepassword');
  }

  usermanagement() {}

  onCity(id: string) {
    this.stateId = id;
    console.log('stateId ' + id);
    this.loginService.getallcityid(this.stateId).subscribe((res: any) => {
      this.allcity = res.response;
    });
  }

  onPincode(id: string) {
    this.cityId = id;
    console.log(this.pinCodeId);
    this.loginService.getpincode(this.cityId).subscribe((res: any) => {
      this.allPinCode = res.response;
    });
  }
  onPinCodeId(id: string) {
    console.log(id);

    this.pinCodeId = id;
  }

  onGo() {
    this.loginService.CountById(this.pinCodeId).subscribe((res: any) => {
      this.AlldashboardData = res.response;
      console.log(this.AlldashboardData);
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

  DashboardComponent() {
    this.router.navigateByUrl(`/dashboard`);
  }
  SocietyComponent() {
    this.router.navigateByUrl(`/society`);
  }
  TransactionhitoryComponent() {
    this.router.navigateByUrl(`/transactionhistory`);
  }
  TicketsComponenets() {
    this.router.navigateByUrl(`/tickets`);
  }
  ManagerComponents() {
    this.router.navigateByUrl(`/manager`);
  }
  UsermanagementComponent() {
    this.router.navigateByUrl(`/usermanagement`);
  }
  ListcityComponent() {
    this.router.navigateByUrl(`/listcity`);
  }
  ListpincodeComponenet() {
    this.router.navigateByUrl(`/listpincode`);
  }

  ListstateComponent() {
    this.router.navigateByUrl(`/liststate`);
  }
  RolelistComponent() {
    this.router.navigateByUrl(`/rolelist`);
  }
  SocietyBasedVisitorsComponent() {
    this.router.navigateByUrl(`/society-based-visitors`);
  }
  SocietyDailyWorkersComponent() {
    this.router.navigateByUrl(`/society-daily-workers`);
  }
  SocietyEmergencyContactComponent() {
    this.router.navigateByUrl(`/society-emergency-contact`);
  }
  SocietySecurityGuardComponent() {
    this.router.navigateByUrl(`/society-security-guard`);
  }
  SocietyTicketWorkersComponent() {
    this.router.navigateByUrl(`/society-ticket-workers`);
  }
  VisitorCategoryComponent() {
    this.router.navigateByUrl(`/visitors-category`);
  }
  ComplaintCategory() {
    this.router.navigateByUrl(`/raised-Complaint`);
  }
  DaikyHelp() {
    this.router.navigateByUrl(`/daily-helper-category`);
  }
  SocietyPromotion() {
    this.router.navigateByUrl(`/society-promotions`);
  }
  DueAmount() {
    this.router.navigateByUrl(`/due-amount`);
  }
  CreateProfile() {
    this.router.navigateByUrl(`/all-admin`);
  }
  WorkerTransaction() {
    this.router.navigateByUrl(`/worker-transaction-history`);
  }
}
