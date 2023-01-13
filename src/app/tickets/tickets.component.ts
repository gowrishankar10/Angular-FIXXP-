import { Component ,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Color } from 'echarts';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }
  searchText:any; 
  allTickets : any[]=[];
  pages: number = 1;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  
  ngOnInit(): void {
    this.router.navigateByUrl('[/dashboard]') 

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


}
