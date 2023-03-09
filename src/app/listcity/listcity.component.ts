import { state } from './../models/society.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AddcityComponent } from '../addcity/addcity.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
    private AR: ActivatedRoute
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
  ngOnInit(): void {
    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
    });

    // this.AR.params.subscribe((param: any) => {
    //   this.state(param.id);
    // });
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

      this.onCity(res.response[0].stateid);

      this.stateid = res.response[0].stateid;
      this.cityid = res.response[0].stateid;
      this.route.navigate([`/edit-city/${id}`], {
        queryParams: { stateId: this.stateid, CITYId: this.cityid },
      });
      console.log('im param state ID  ' + res.response[0].stateid);
    });
  }

  EditCity(id: string) {
    this.route.navigateByUrl(`/edit-city/${id}`);
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
    this.route.navigateByUrl(`/visitor-category`);
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
}
