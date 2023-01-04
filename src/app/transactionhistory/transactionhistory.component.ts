import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent {
  constructor(private loginService: LoginService, private route: Router) { }

  alltransactions: any;


  ngOnInit(): void {
    this.route.navigateByUrl('[/dashboard]') 



    this.loginService.getAllTransaction().subscribe((res: any) => {
      this.alltransactions = res.response;
      this.alltransactions = res;
      console.log(this.alltransactions);
      console.log(res.response);
      console.log(res);
    });
  }
}
