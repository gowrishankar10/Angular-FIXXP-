import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';
import { Color } from 'echarts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router) { }
  searchText:any; 
  allTickets : any[]=[];
  pages: number = 1;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  
  ngOnInit(): void {
    this.route.navigateByUrl('[/tickets]')


    this.loginService.GetTickets().subscribe((res: any) => {
         this.allTickets = res.response;
         console.log(res);
       });
     }
     name = 'ExcelSheet.xlsx';
     exportToExcel(): void {
       let element = document.getElementById('season-tble');
       const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
   
       const book: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
   
       XLSX.writeFile(book, this.name);
     }
   
     DashboardComponent()
     {
       this.route.navigateByUrl(`/dashboard`);
     }
     SocietyComponent()
     {
       this.route.navigateByUrl(`/society`);
     }
     Transactionhitoryomponent()
     {
       this.route.navigateByUrl(`/transactionhistory`);
     }
     TicketsComponenets()
     {
       this.route.navigateByUrl(`/tickets`);
     }
     ManagerComponents()
     {
       this.route.navigateByUrl(`/manager`);
     }
     UsermanagementComponent()
     {
       this.route.navigateByUrl(`/usermanagement`);
     }
     ListcityComponent()
     {
       this.route.navigateByUrl(`/listcity`);
     }
     ListpincodeComponenet()
     {
       this.route.navigateByUrl(`/listpincode`);
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
}
