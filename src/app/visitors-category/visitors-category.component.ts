import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-visitors-category',
  templateUrl: './visitors-category.component.html',
  styleUrls: ['./visitors-category.component.css'],
})
export class VisitorsCategoryComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  searchText: any;
  pages: number = 1;
  deleteall: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  visitorTypeId:any;
  visitorTypeName:any;

  visitorCategory: any;

  ngOnInit(): void {
    this.visitor();
   
  }

  visitor() {
    this.loginService.CategoryVisitor().subscribe((res: any) => {
      this.visitorCategory = res.response;
    });
  }
  delete(id: string) {
    this.loginService.deleteVisotorsCategory(id).subscribe((res: any) => {
      if (res.message === 'Deleted Successfully') {
        this.route.navigateByUrl('visitors-category');
      }

      console.log(res);
    });
  }

  visitorId(id: string)
  {
    this.route.navigateByUrl(`/edit-visitor-category/${id}`)
  }

  

  DashboardComponent() {
    this.route.navigateByUrl(`/dashboard`);
  }
  SocietyComponent() {
    this.route.navigateByUrl(`/society`);
  }
  TransactionhistoryComponent() {
    this.route.navigateByUrl(`/transactionhistory`);
  }
  TicketsComponenets() {
    this.route.navigateByUrl(`/tickets`);
  }
  ManagersComponent() {
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
