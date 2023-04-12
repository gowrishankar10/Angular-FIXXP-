import { state } from './../models/society.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AddcityComponent } from '../addcity/addcity.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-listcity',
  templateUrl: './listcity.component.html',
  styleUrls: ['./listcity.component.css'],
})
export class ListcityComponent implements OnInit {
  select: any;
  selectYourstate: any;

  constructor(
    private loginService: LoginService,
    private route: Router,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {}
  searchText: any;
  allSociety: any;
  allBlockData: any;
  pages: number = 1;
  allstate: any;
  cityId!: number | null;
  allcity: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  selectedOption: number = 1;
  stateid: any;
  cityid: any;
  delCity: any;
  ngOnInit(): void {
    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
    });

    // this.AR.params.subscribe((param: any) => {
    //   this.state(param.id);
    // });
  }

  deletecity(id: string) {
    this.loginService.deletecity(id).subscribe((res: any) => {
      this.delCity = res.response;
      if (res.flag === 1) {
        this.onCity();
        this.toastr.error('It has been deleted');
      } else if (res.flag === 2) {
        this.toastr.info(res.message);
      }
    });
  }

  onCity(defaultId?: any) {
    console.log('imccity' + this.cityId);
    this.loginService
      .getallcityid(defaultId || this.cityId)
      .subscribe((res: any) => {
        console.log(res);
        this.allcity = res.response;
        if (res.flag === 2) {
          this.toastr.error(res.message);
        }
        console.log('im state ID' + this.cityId);
      });
  }

  state(id: string) {
    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;

      this.onCity(this.stateid);

     
      this.route.navigate([`/edit-city/${id}`], {
        queryParams: { stateId: this.stateid, CITYId: this.cityId },
      });
      console.log('im param state ID  ' + res.response[0].stateid);
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
  EditCity(id: string) {
    this.route.navigateByUrl(`/edit-city/${id}`);
  }
  AllvsitorsType() {
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
  AddcityComponent() {
    this.route.navigateByUrl(`/addcity`);
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
  // openDialog() {
  //   const dialogRef = this.dialog.open(AddcityComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  CreateProfile() {
    this.route.navigateByUrl(`/all-admin`);
  }
  WorkerTransaction() {
    this.route.navigateByUrl(`/worker-transaction-history`);
  }
}
