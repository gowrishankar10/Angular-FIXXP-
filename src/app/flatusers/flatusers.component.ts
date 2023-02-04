import { Component , OnInit} from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-flatusers',
  templateUrl: './flatusers.component.html',
  styleUrls: ['./flatusers.component.css']
})
export class FlatusersComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router,private AR: ActivatedRoute) { }
  items = ['Main Master >'];
  itemss = ['User Management >'];
  expandedIndex = 0;
  items1 = ['Society Management >'];
  getallFlatusers:any;
  pages: number = 1;
  searchText:any;
  ngOnInit(): void {
    this.AR.params.subscribe((param: any) => {
      this.Flatusers(param.id) 
    })

  }
  Flatusers(id: string) {
    this.loginService.getFlatusers(id).subscribe((res: any) => {
      this.getallFlatusers = res.response;
      console.log(this.getallFlatusers);
    });
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
  ManagerComponents()
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

  Dashboard()
  {
    this.router.navigateByUrl(`/dashboard`);
  }
  ListstateComponent()
  {
    this.router.navigateByUrl(`/liststate`);
  }
  RolelistComponent()
  {
    this.router.navigateByUrl(`/rolelist`);
  }
  SocietyBasedVisitorsComponent()
  {
    this.router.navigateByUrl(`/society-based-visitors`);
  }
  SocietyDailyWorkersComponent()
  {
    this.router.navigateByUrl(`/society-daily-workers`);
  }
  SocietyEmergencyContactComponent()
  {
    this.router.navigateByUrl(`/society-emergency-contact`);
  }
  SocietySecurityGuardComponent()
  {
    this.router.navigateByUrl(`/society-security-guard`);
  }
  SocietyTicketWorkersComponent()
  {
    this.router.navigateByUrl(`/society-ticket-workers`);
  }
  VisitorCategoryComponent()
  {
    this.router.navigateByUrl(`/visitor-category`);
  }
  ComplaintCategory()
  {
    this.router.navigateByUrl(`/raised-Complaint`);
  }
  DaikyHelp()
  {
    this.router.navigateByUrl(`/daily-helper-category`);
  }
  SocietyPromotions()
  {
    this.router.navigateByUrl(`/society-promotions`);
  }
  SocietyPromotion()
  {
    this.router.navigateByUrl(`/society-promotions`);
  }
  }
  
  
