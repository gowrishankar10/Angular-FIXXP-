import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { EChartsOption } from 'echarts';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { AddcityComponent } from '../addcity/addcity.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  options: EChartsOption = {
    color: ['#3398DB'],
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
    xAxis: [
      {
        type: 'category',
        data: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '20%',
        data: [
          2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000,
          6500,
        ],
      },
    ],
  };
  loginForm: any;
  error: unknown;
  pincode: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public dialog: MatDialog
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
  ngOnInit(): void {
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
          data: ['nov', 'dec', 'sep'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ];
      this.options.yAxis = [
        {
          type: 'category',
          data: [700, 8000, 90000],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ];
      console.log(res);
    });
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

  // openDialogss() {
  //   const dialogRef = this.dialog.open(AddcityComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  openDialog() {
    const dialogRef = this.dialog.open(ProfileComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
