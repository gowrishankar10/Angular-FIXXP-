import { ToastrModule } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import * as XLSX from 'xlsx';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-due-amount',
  templateUrl: './due-amount.component.html',
  styleUrls: ['./due-amount.component.css'],
})
export class DueAmountComponent implements OnInit {
  constructor(
    private route: Router,
    private LoginService: LoginService,
    private ActivatedRoute: ActivatedRoute,
 public dialog: MatDialog
 
    
  ) {}
  searchText: any;
  pages: number = 1;
  deleteall: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  expandedIndex = 0;
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');

  Name: any;
  due: any;
  getSociety:any;
  IdSociety:any;

  societyId:any;
  allsocietyvisitor:any;
  visitorgetId:any;
  DueAmount: any;
  FlatId: any;
  ViewID: any;
  

  ngOnInit(): void {
    this.LoginService.DueAmounts().subscribe((res: any) => {
      this.DueAmount = res.response;

      console.log(this.due);
    });
    this.LoginService.getAllSociety().subscribe((res:any)=>
    {
      this.getSociety=res.response;
      console.log(res)
    })
  }
 
  ChangePasswordopenDialog() {
    const dialogRef = this.dialog.open(ChangepasswordComponent);
        dialogRef.afterClosed().subscribe((result) => {
          console.log(`Dialog result: ${result}`);
        });
      }
  
  logout() {
    this.LoginService.logout();
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
  societyvisit()
  {
    this.LoginService.societyVisitor(this.societyId).subscribe((res:any)=>
    {
      this.allsocietyvisitor=res.response;
      this.visitorgetId= res.response[0].visitorsId
      console.log(res.message)
     
    })
  }
  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
  ViewById(id: string) {
    this.ViewID = id;
    this.route.navigate([`/view-due-amount/${id}`], {
      queryParams: { Due: this.ViewID },
    });
    console.log('Nan inga' + this.ViewID);
  }

  AllvsitorsType()
  {
  this.route.navigateByUrl(`/all-visitors-type`);
  }
  
  AddSocietyComponent() {
    this.route.navigateByUrl(`/addsociety`);
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

  AddVisitors() {
    this.route.navigateByUrl(`/addvisitors`);
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
CreateProfile()
  {
    this.route.navigateByUrl(`/all-admin`);
  } 
  StampPaper() {
    this.route.navigateByUrl(`/stamp-paper`);
  }
  WorkerTransaction()
  {
    this.route.navigateByUrl(`/all-worker-transaction`);
  }
  HomeTransaction() {
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

