import { Component, OnInit ,VERSION  } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CityModel } from '../models/society.model';

@Component({
  selector: 'app-abs',
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.css']
})
export class AbsComponent  { 
 
  registerForm: any;
  FormGroup: any;
  submitted = false;


  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute) { }

  allstate: any;
  CityName!: string | null;
  successMessage!: string;
  stateId!: number;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  ngOnInit() {

    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
    });


  }
  onState(id: number) {
    this.stateId = id;

  }

  onSubmit() {
    let submitModel: CityModel = {
      cityname: this.CityName,
      stateEntity: {
        stateid: this.stateId || null
      }
    }
    this.loginService.addCity(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      if (this.successMessage) {
        this.route.navigateByUrl('listcity');

        this.CityName = null;

      }
      console.log(this.CityName)
      
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

  AddRole()
  {
    this.route.navigateByUrl(`/addrole`);
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


