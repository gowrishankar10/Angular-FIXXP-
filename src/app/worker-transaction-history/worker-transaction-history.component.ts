import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { LoginService } from '../services/Login Service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-worker-transaction-history',
  templateUrl: './worker-transaction-history.component.html',
  styleUrls: ['./worker-transaction-history.component.css'],
})
export class WorkerTransactionHistoryComponent {
  constructor(private loginService: LoginService, private route: Router) {}

  alltransactions: any;
  searchText: any;
  pages: number = 1;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  transId: any;

  
  ngOnInit(): void {
    this.loginService.workerTransactions().subscribe((res: any) => {
      this.alltransactions = res.Data;
      console.log(this.alltransactions);
      console.log(res.Data);
      console.log(res);
    });
  }
  PDF(id: string) {}

  SettlementUpdate(id: string) {
    this.route.navigate([`/settlement-update/${id}`], {
      queryParams: { transId: id },
    });
    console.log(this.transId);
  }

  workerTransaction()
  {
    this.route.navigateByUrl('/worker-transaction-history')
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
  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
}
