import { LoginService } from './../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component ,OnInit } from '@angular/core';
import { stateStatus } from '../models/society.model';
  @Component({
  selector: 'app-liststate',
  templateUrl: './liststate.component.html',
  styleUrls: ['./liststate.component.css']
})
export class ListstateComponent implements OnInit{
searchText: any;

  constructor(private loginService: LoginService, private route: Router ,private ActivatedRoute :ActivatedRoute) {}
  stateid:any;
  isactive !: number ;
  userIds:any;
  pages: number = 1;
  activeStatus:any;
  allstate: any;
  cityId!: string | null;
  allcity: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  paramstate: any;
  ngOnInit(): void {

  
    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
    });
  }
  editState(id: string) {
    this.paramstate = id;
    this.route.navigate([`/edit-state/${id}`], {
      queryParams: { stateId: this.paramstate },
    });

  }
  Status(id : string)
  {
    this.route.navigate([`/statestatus/${id}`], {
      queryParams: { stateId: id },
    });
  
  }

  onSubmit() {
    let submitModel: stateStatus = {

      activeStatus: this.isactive ? 1:0,
      
    };

    this.loginService
      .stateStatus( this.stateid , submitModel)
      .subscribe((res: any) => {
        console.log(res)
        
     
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
  AddState()
  {
    this.route.navigateByUrl(`/addstate`);
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
  SocietyPromotion()
  {
    this.route.navigateByUrl(`/society-promotions`);
  }
  DueAmount()
  {
    this.route.navigateByUrl(`/due-amount`);
  }
}

