import { ToastrModule } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import * as XLSX from 'xlsx';

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
 
    
  ) {}
  searchText: any;
  pages: number = 1;
  deleteall: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
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
}
