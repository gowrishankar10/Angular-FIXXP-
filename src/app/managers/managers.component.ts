import { managerBankDetail, EditManager } from './../models/society.model';
import { Component, OnInit, VERSION } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css'],
})
export class ManagersComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router,private toastr: ToastrService,public dialog: MatDialog) {}
  allSociety: any;
  searchText: any;
  blockData: any;
  allManager: any;
  pages: number = 1;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  expandedIndex = 0;
  societyManagerId: any;
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  ngOnInit(): void {
    this.loginService.allManagerPath().subscribe((res: any) => {
      this.allManager = res.response;
      console.log(res);
      this.toastr.info(res.message);
    });
  }
  onManagerId(id: string) {
    this.loginService.ManagerById(id).subscribe((res: any) => {
      this.onManagerId = res.response;
    });
  }
  bankDetail(id: string) {
    this.route.navigateByUrl(`viewmanager/${id}`);
    console.log(id)
  }

  SocietyManagerKYC(id: string){
    this.route.navigate([`/view-kyc-manager/${id}`], {
      queryParams: { mangerid: id },
      
    });
  }
  
  SocietyManagerEdit(id :string)
  {
    this.route.navigate([`/edit-manager/${id}`], {
      queryParams: { mangerid: id },
      
    });
  }
  EditManager(id: string)
  {
    this.route.navigate([`/edit-manager/${id}`], {
      queryParams: { mangerid: id },
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
  AddmanagerComponent()
  {
    this.route.navigateByUrl(`/addmanager`);
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
  AllvsitorsType()
  {
    this.route.navigateByUrl(`/all-visitors-type`);
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
  
}
