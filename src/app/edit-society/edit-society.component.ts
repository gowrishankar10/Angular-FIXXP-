import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocietyModel } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-edit-society',
  templateUrl: './edit-society.component.html',
  styleUrls: ['./edit-society.component.css']
})
export class EditSocietyComponent {
  registerForm: any;
  FormGroup: any;
  submitted = false;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}

  allstate: any;
  allcity: any;
  cityId!: any | null;
  pinCodeId!: any | null;
  allPinCode: any;
  societyName!: string | null;
  successMessage!: string;
  societyId!: number;
  stateId: any;
  pinCodeIdAdd: any;
  Maintanance: any;
  Address: any;
  MobileNumber: any;
  items = ['Main Master '];
  itemss = ['User Management >'];
  items1 = ['Society Management >'];
  expandedIndex = 0;

  ngOnInit() {
    this.activeRouter.params.subscribe((param: any) => {
      this.societyId = param.id;
      this.societyName = param.name;
    });

    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
    });
  }

  onCity(id: number) {
    console.log(this.stateId);
    this.loginService.getallcityid(this.stateId).subscribe((res: any) => {
      this.allcity = res.response;
    });
  }

  onPincode(id: string) {
    this.cityId = id;
    this.loginService.getpincode(this.cityId).subscribe((res: any) => {
      this.allPinCode = res.response;
    });
  }
  onPinCodeId(id: string) {
    console.log(id);

    this.pinCodeIdAdd = id;
  }

  onSubmit() {
    let submitModel: SocietyModel = {
      societyname: this.societyName,
      maintenanceCharges: this.Maintanance,
      address: this.Address,
      mobileNumber: this.MobileNumber,

      pincodeModel: {
        pincodeId: this.pinCodeIdAdd || null,
      },
    };

    this.loginService
      .editSociety(this.societyId, submitModel)
      .subscribe((res: any) => {
        this.successMessage = res.message;
        if (this.successMessage) {
          this.route.navigateByUrl('society');
          this.societyName = null;
          this.pinCodeId = null;
          this.cityId = null;
        }
        console.log(res);
      });
    console.log('edit service is here');
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
}


