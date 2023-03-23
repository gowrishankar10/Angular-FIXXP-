import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddStampPaper } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-add-stamp-paper',
  templateUrl: './add-stamp-paper.component.html',
  styleUrls: ['./add-stamp-paper.component.css']
})
export class AddStampPaperComponent {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}

  allSociety: any;
  societyId: any;
  successMessage: any;
  stampSizePaperAmount: any;
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
    let submitModel: AddStampPaper = {
      stampSizePaperAmount: this.stampSizePaperAmount || null,

      createdBy: this.createdBy || null,

      

 
    };

    this.loginService
      .AddStampPapers(submitModel)
      .subscribe((res: any) => {

        if(res.flag===1)
        {
          this.route.navigateByUrl('/stamp-paper')
        }
       
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
