import { Component } from '@angular/core';
import { RentPaySettlement } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-rentpay-settlement',
  templateUrl: './rentpay-settlement.component.html',
  styleUrls: ['./rentpay-settlement.component.css']
})
export class RentpaySettlementComponent {
  successMessage: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute,
  ) {}

  VisitorsName: any;
  roleCode: any;
  allRole: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  CityName: any;
  transIdValue:any;
  cityid: any;
  effeDate:any;
  SettlementNumber:any;
  DateTime:any;
  Status:any;
  Reason:any;
  today = new Date();
  dateCheck: any;

  ngOnInit() {

    let date = moment(new Date(this.today))
    .format('yyyy-MM-dd hh:mm:ss')
    .toString();
  this.dateCheck = date;

    this.activeRouter.queryParams.subscribe((param: any) => {
      this.transIdValue = param.transId;
      console.log('this param EDIT' + this.transIdValue);
      
    });
  }

  addpromotion() {
    let effdate = (<HTMLInputElement>document.getElementById('effdate')).value;


    let d = effdate.concat(':00');
    let effDate = new Date(d);

  

  }



  onSubmit() {
    
    let submitModel: RentPaySettlement = {
    
   settlementUTRNumber: this.SettlementNumber,

   settlementDateTime: this.effeDate,

   settlementStatus: this.Status,

   settlementReason: this.Reason,
    };
    
    this.loginService
      .RentPaySettlements(this.transIdValue, submitModel)
      .subscribe((res: any) => {
        this.successMessage = res.message;
        if (this.successMessage) {
          this.route.navigateByUrl('/rent-pay');

          this.CityName = null;
        }
        console.log(this.CityName);
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

  Dashboard() {
    this.route.navigateByUrl(`/dashboard`);
  }
  ListstateComponent() {
    this.route.navigateByUrl(`/liststate`);
  }
  RolelistComponent() {
    this.route.navigateByUrl(`/rolelist`);
  }
  SocietyBasedVisitorsComponent() {
    this.route.navigateByUrl(`/society-based-visitors`);
  }
  SocietyDailyWorkersComponent() {
    this.route.navigateByUrl(`/society-daily-workers`);
  }
  SocietyEmergencyContactComponent() {
    this.route.navigateByUrl(`/society-emergency-contact`);
  }
  SocietySecurityGuardComponent() {
    this.route.navigateByUrl(`/society-security-guard`);
  }
  SocietyTicketWorkersComponent() {
    this.route.navigateByUrl(`/society-ticket-workers`);
  }
  VisitorCategoryComponent() {
    this.route.navigateByUrl(`/visitors-category`);
  }
  ComplaintCategory() {
    this.route.navigateByUrl(`/raised-Complaint`);
  }
  DaikyHelp() {
    this.route.navigateByUrl(`/daily-helper-category`);
  }
  SocietyPromotion() {
    this.route.navigateByUrl(`/society-promotions`);
  }
  DueAmount()
  {
    this.route.navigateByUrl(`/due-amount`);
  }
}
