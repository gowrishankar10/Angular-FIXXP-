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
  searchText: any;
  pages: number = 1;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  ngOnInit(): void {
    this.route.navigateByUrl('[/dashboard]') 



    this.loginService.getAllTransaction().subscribe((res: any) => {
      this.alltransactions = res.Data;
      console.log(this.alltransactions);
      console.log(res.Data);
      console.log(res);
    });
  }
}
