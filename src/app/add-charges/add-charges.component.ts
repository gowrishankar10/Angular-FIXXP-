import { Charges } from './../models/society.model';
import { Component } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-charges',
  templateUrl: './add-charges.component.html',
  styleUrls: ['./add-charges.component.css']
})
export class AddChargesComponent {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}

  allSociety: any;
  societyId: any;
  successMessage: any;
  greenPageAmount: any;
  gstPercentage: any;
  sgstPercentage: any;
  igstPercentage: any;
  courierCharge: any;
  otherCharge: any;
  mySociety: any;
  createdBy: any=localStorage.getItem('name');
  RelationshipStatus: any;
  EmergencyContactName: any;
  EmergencyContactNumber: any;
  HospitalNumber:any;
  HospitalName:any;
  
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  ngOnInit() {
    this.loginService.getAllSociety().subscribe((res: any) => {
      this.allSociety = res.response;
      console.log(this.allSociety);
    });
  }
  onSociety(id: string) {
    this.societyId = id;
  }

  onSubmitButton() {
    let submitModel: Charges = {
      greenPageAmount: this.greenPageAmount || null,

      gstPercentage: this.gstPercentage || null,

      sgstPercentage: this.sgstPercentage || null,

      igstPercentage: this.igstPercentage || null,

      courierCharge: this.courierCharge || null,

      otherCharge: this.otherCharge || null,

      createdBy: this.createdBy || null,

      societyId: this.societyId || null,

 
    };

    this.loginService
      .charges(submitModel)
      .subscribe((res: any) => {
        this.successMessage = res.message;
       
      });
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
