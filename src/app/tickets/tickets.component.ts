import { Component ,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Color } from 'echarts';

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


}
