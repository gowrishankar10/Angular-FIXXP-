import { Settlement } from './../models/society.model';
import { ReceiptService } from '../Services/Receipt PDF/receipt.service'; 
import { Component } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css'],
})
export class TransactionhistoryComponent {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private ReceiptService: ReceiptService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  alltransactions: any;
  searchText: any;
  pages: number = 1;
  items = ['Main Master']; 
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  expandedIndex = 0;
  transId:any;
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  ngOnInit(): void {
    this.loginService.getAllTransaction().subscribe((res: any) => {
      this.alltransactions = res.Data;
      console.log(this.alltransactions);
      console.log(res.Data);
      console.log(res);
      // this.toastr.info(res.message);
    });
  }
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
  PDF(id: string) {
    this.ReceiptService.DownloadPdf(id).subscribe((pdfData) => {
      if(pdfData==null)
      {
        alert("there is no pdf")
      }
      saveAs(new Blob([pdfData]), '<Transaction History->.pdf');

      this.transId = id;
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
  SettlementUpdate(id: string) {
    this.route.navigate([`/settlement-update/${id}`], {
      queryParams: { transId: id },
    });
    console.log(this.transId); 
  }

  DashboardComponent() {
    this.route.navigateByUrl(`/dashboard`);
  }
  SocietyComponent() {
    this.route.navigateByUrl(`/society`);
  }
  Transactionhitoryomponent() {
    this.route.navigateByUrl(`/tranasactionhistory`);
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
  name = 'ExcelSheet.xlsx';

  CreateProfile() {
    this.route.navigateByUrl(`/all-admin`);
  }
  WorkerTransaction() {
    this.route.navigateByUrl(`/all-worker-transaction`);
  }
  AllvsitorsType() {
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
  WorkersSlot()
  {
    this.route.navigateByUrl('/getallworker-time-slot')
  }
  AddCharges() {
    this.route.navigateByUrl(`/all-charges`);
  }
  AgreementType()
{
  this.route.navigateByUrl('/all-agreement-type');
}

}