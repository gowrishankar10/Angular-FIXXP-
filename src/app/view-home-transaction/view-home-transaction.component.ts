import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-view-home-transaction',
  templateUrl: './view-home-transaction.component.html',
  styleUrls: ['./view-home-transaction.component.css']
})
export class ViewHomeTransactionComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}

  homeTransaction:any;
  pages: number = 1;


  ngOnInit(): void {
      
  }

  viewhometransaction(id:string)
  {
    this.loginService.ViewHomeTransaction(id).subscribe((res:any)=>{
      this.homeTransaction = res.Data;
      console.log(res.Data);
      
    })
  }
}
