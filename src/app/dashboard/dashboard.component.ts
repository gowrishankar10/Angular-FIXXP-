import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { EChartsOption } from 'echarts';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { AddcityComponent } from '../addcity/addcity.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';

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
  Changepass:any;
  chgPass:any;
  Profile:any;
  AllProfile:any
  myAllProfile:any;

  ngOnInit(): void {

    
    this.loginService.GetAllProfile().subscribe((res:any)=>
    {

      this.myAllProfile=res.response;
    })
    

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
          data: ['jan', 'feb', 'apr', 'march' ,'may ' , 'june' , 'july', 'aug' , 'sep' , 'oct' , 'nov' , 'dec'],
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
    this.options.series= [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '20%',
        data: [
          2000, 2500, 3000,5676.6676,7877,8766,2344,1234,1234,3456,6345, 5666
        ],
      },
    ]
  }


  adminProfile(id:string)
  {
    this.loginService.adminprifileid(id).subscribe((res:any)=>
    {
      this.AllProfile=res.response;    
      console.log('profile'+id)
    });
  }

  adminnavigate()
  {
    this.router.navigateByUrl('/changepassword')
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


  openDialog() {
    const dialogRef = this.dialog.open(ProfileComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ChangePasswordopenDialog() {
const dialogRef = this.dialog.open(ChangepasswordComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  
  changePassword(id:string)
{
  this.router.navigateByUrl(`/changepassword/${id}`)

  console.log("im cp =" + id)
  

}

  logout() {
    this.loginService.logout();
  }
}
