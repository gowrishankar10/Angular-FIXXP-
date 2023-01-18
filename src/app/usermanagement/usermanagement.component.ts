import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  allUsers: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  searchText: any;
  constructor(private loginService: LoginService, private router: Router,public dialog: MatDialog) { }


  pages: number = 1;


  ngOnInit(): void {
    this.router.navigateByUrl('[/dashboard]') 

    this.loginService.getUserManagement().subscribe((res: any) => {
      this.allUsers = res.response;
      console.log(this.allUsers);
    });

  }
 
    viewuser(id: string) {
      console.log(id)
      this.router.navigateByUrl(`/viewuser/${id}`);
    }
   

    
 

    DashboardComponent()
    {
      this.router.navigateByUrl(`/dashboard`);
    }
    SocietyComponent()
    {
      this.router.navigateByUrl(`/society`);
    }
    TransactionhitoryComponent()
    {
      this.router.navigateByUrl(`/transactionhistory`);
    }
    TicketsComponenets()
    {
      this.router.navigateByUrl(`/tickets`);
    }
    ManagersComponents()
    {
      this.router.navigateByUrl(`/manager`);
    }
    UsermanagementComponent()
    {
      this.router.navigateByUrl(`/usermanagement`);
    }
    ListcityComponent()
    {
      this.router.navigateByUrl(`/listcity`);
    }
    ListpincodeComponenet()
    {
      this.router.navigateByUrl(`/listpincode`);
    }
    
}
