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

  constructor(private loginService: LoginService, private route: Router) { }
  allTickets : any[]=[];
  
  ngOnInit(): void {
    this.route.navigateByUrl('[/dashboard]') 

    this.loginService.GetTickets().subscribe((res: any) => {
         this.allTickets = res.response;
         console.log(res);
       });
     }


}
