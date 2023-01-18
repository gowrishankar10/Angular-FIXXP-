import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css'],
})
export class RolelistComponent {
  constructor(private loginService: LoginService, private route: Router) {}
  searchText: any;
 
  pages: number = 1;
  allstate: any;
  cityId!: string | null;
  allcity: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  allrole:any;

  ngOnInit(): void {

    this.loginService.allRole().subscribe((res: any) => {
      this.allrole = res.response;
      console.log(this.allrole);
    });

  
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
}
