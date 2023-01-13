import { Component, OnInit ,VERSION  } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AddsocietyComponent } from '../addsociety/addsociety.component';


@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  constructor(private loginService: LoginService, private toastr: ToastrService, private route: Router,private dialog:MatDialog) { }
  searchText: any;
  allSociety: any;
  allBlockData: any;
  pages: number = 1;
  deleteall: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  ngOnInit(): void {
   

    this.getAllSociety();
  }

  getAllSociety() {
    this.loginService.getSociety().subscribe((res: any) => {
      this.allSociety = res.response;
      console.log(res);
    });
  }

  onDetail(id: string) {
    console.log(id)
    this.route.navigateByUrl(`/block/${id}`);
  }


  delete(id: string) {
    this.loginService.deleteSociety(id).subscribe((res: any) => {
      if (res.flag === 1) {
        this.getAllSociety();
        this.toastr.error('It has been deleted');
      } else if (res.flag === 2) {
        this.toastr.info(res.message);
      }
      this.deleteall = res.response;
      console.log(res)
    })
  }
  DashboardComponent()
  {
    this.route.navigateByUrl(`/dashboard`);
  }
  SocietyComponent()
  {
    this.route.navigateByUrl(`/society`);
  }
  TransactionhistoryComponent()
  {
    this.route.navigateByUrl(`/transactionhistory`);
  }
  TicketsComponenets()
  {
    this.route.navigateByUrl(`/tickets`);
  }
  ManagersComponent()
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
  // openDialog() {
  //   const dialogRef = this.dialog.open(AddsocietyComponent);
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  

}

