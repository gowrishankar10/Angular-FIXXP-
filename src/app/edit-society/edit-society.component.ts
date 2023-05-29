import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import {
  editSocietyModel,
  pincodeModel,
  SocietyModel,
} from '../models/society.model';
import { ProfileComponent } from '../profile/profile.component';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-edit-society',
  templateUrl: './edit-society.component.html',
  styleUrls: ['./edit-society.component.css'],
})
export class EditSocietyComponent {
  registerForm: any;
  FormGroup: any;
  submitted = false;
  pincode: pincodeModel | any;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute,
    public dialog: MatDialog
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
  AdminName: any = localStorage.getItem('name');
  items = ['Main Master '];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  expandedIndex = 0;
  Logged: any = localStorage.getItem('lastLogedon');
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

  // onSubmits() {
  //   let submitModel: editSocietyModel = {
  //     societyname: this.societyName,
  //     maintenanceCharges: this.Maintanance,
  //     address: this.Address,
  //     mobileNumber: this.MobileNumber,
  //     createdBy: this.AdminName,

  //   };

  //   this.loginService
  //     .editSociety(this.societyId, submitModel)
  //     .subscribe((res: any) => {
  //       this.successMessage = res.message;
  //       if (this.successMessage) {
  //         this.route.navigateByUrl('society');
  //         this.societyName = null;
  //         this.pinCodeId = null;
  //         this.cityId = null;
  //       }
  //       console.log(res);
  //     });
  //   console.log('edit service is here');
  // }
  onSubmit() {
    let submitModel: editSocietyModel = {
      societyname: this.societyName,
      maintenanceCharges: this.Maintanance,
      address: this.Address,
      mobileNumber: this.MobileNumber,
      createdBy: this.AdminName,
      pincodeModel: { pincodeId: this.pinCodeId },
    };
    this.loginService
      .editSociety(this.societyId, submitModel)
      .subscribe((res: any) => {
        this.successMessage = res.message;
        if (this.successMessage) {
          this.route.navigateByUrl('/society');
          this.societyName = null;
          this.pincode = null;
          this.cityId = null;
        }
        console.log(res);
      });
  }
  ChangePasswordopenDialog() {
    const dialogRef = this.dialog.open(ChangepasswordComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout() {
    this.loginService.logout();
  }
  openDialogss() {
    const dialogRef = this.dialog.open(ChangepasswordComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProfileComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  AllvsitorsType() {
    this.route.navigateByUrl(`/all-visitors-type`);
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
  DueAmount() {
    this.route.navigateByUrl(`/due-amount`);
  }
  CreateProfile() {
    this.route.navigateByUrl(`/all-admin`);
  }
  WorkerTransaction() {
    this.route.navigateByUrl(`/worker-transaction-history`);
  }
  StampPaper() {
    this.route.navigateByUrl(`/stamp-paper`);
  }
  HomeTransaction() {
    this.route.navigateByUrl(`/home-transaction`);
  }
  RentPay() {
    this.route.navigateByUrl(`/rent-pay`);
  }
  WorkersSlot() {
    this.route.navigateByUrl('/getallworker-time-slot');
  }

  AddCharges() {
    this.route.navigateByUrl(`/all-charges`);
  }
  AgreementType()
  {
    this.route.navigateByUrl('/all-agreement-type');
  }
  
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
