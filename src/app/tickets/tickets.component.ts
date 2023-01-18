import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
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
  itemss = ['User Management '];
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
   
   
}
