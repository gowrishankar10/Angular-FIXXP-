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
    private AR: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  searchText: any;
  pages: number = 1;
  deleteall: any;
  items = ['Main Master >'];
  itemss = ['User Management >'];
  items1 = ['Society Management >'];
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
  AddVisitors()
  {
    this.route.navigateByUrl(`/addvisitor`);
  }
  DashboardComponent()
  {
    this.route.navigateByUrl(`/dashboard`);
  }
  SocietyComponent()
  {
    this.route.navigateByUrl(`/society`);
  }
  TransactionhitoryComponent()
  {
    this.route.navigateByUrl(`/transactionhistory`);
  }
  TicketsComponenets()
  {
    this.route.navigateByUrl(`/tickets`);
  }
  ManagerComponents()
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
  AddcityComponent()
  {
    this.route.navigateByUrl(`/addcity`); 
  }
  Dashboard()
  {
    this.route.navigateByUrl(`/dashboard`);
  }
  ListstateComponent()
  {
    this.route.navigateByUrl(`/liststate`);
  }
  RolelistComponent()
  {
    this.route.navigateByUrl(`/rolelist`);
  }
  SocietyBasedVisitorsComponent()
  {
    this.route.navigateByUrl(`/society-based-visitors`);
  }
  SocietyDailyWorkersComponent()
  {
    this.route.navigateByUrl(`/society-daily-workers`);
  }
  SocietyEmergencyContactComponent()
  {
    this.route.navigateByUrl(`/society-emergency-contact`);
  }
  SocietySecurityGuardComponent()
  {
    this.route.navigateByUrl(`/society-security-guard`);
  }
  SocietyTicketWorkersComponent()
  {
    this.route.navigateByUrl(`/society-ticket-workers`);
  }
  VisitorCategoryComponent()
  {
    this.route.navigateByUrl(`/visitors-category`);
  }
  ComplaintCategory()
  {
    this.route.navigateByUrl(`/raised-Complaint`);
  }
  DaikyHelp()
  {
    this.route.navigateByUrl(`/daily-helper-category`);
  }
}
