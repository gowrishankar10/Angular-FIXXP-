import { Router } from '@angular/router';
import { Component ,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-liststate',
  templateUrl: './liststate.component.html',
  styleUrls: ['./liststate.component.css']
})
export class ListstateComponent implements OnInit{
searchText: any;

  constructor(private loginService: LoginService, private route: Router) {}

  pages: number = 1;
  allstate: any;
  cityId!: string | null;
  allcity: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  ngOnInit(): void {

    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
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

