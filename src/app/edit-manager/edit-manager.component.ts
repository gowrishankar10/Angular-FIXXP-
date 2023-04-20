import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { EditManager } from '../models/society.model';
import { ProfileComponent } from '../profile/profile.component';
import { LoginService } from '../services/Login Service/login.service';
@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {
  form = new FormGroup({
    Name: new FormControl(null, Validators.required),
    mobileNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[0-9]*$'),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    city: new FormControl(null, Validators.required),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
    ]),
    roleId: new FormControl(null, Validators.required),
    society: new FormControl(null, Validators.required),
  });

  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute,public dialog: MatDialog
  ) {}

  allSociety: any;
  ModifiedBy: any = localStorage.getItem('name');
  ;
  successMessage: any;
  fullName: any;
  Mobile: any;
  myemail: any;
  myPassword: any;
  mycity: any;
  myRoleId: any;
  mySociety: any;
  BloodGroup: any;
  RelationshipStatus: any;
  EmergencyContactName: any;
  EmergencyContactNumber: any;
  HospitalNumber:any;
  HospitalName:any;
  societyId:any;
  managerId:any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  ngOnInit() {
    this.loginService.getAllSociety().subscribe((res: any) => {
      this.allSociety = res.response;
      console.log(this.allSociety);
    });

    this.activeRouter.queryParams.subscribe((param: any) => {
      this.managerId = param.mangerid;
    })
    console.log("params ="+ this.managerId)
  }
  onSociety(id: string) {
    this.societyId = id;
  }

  onSubmitButton() {
    let submitModel: EditManager = {
      fullName: this.fullName || null,

      email: this.myemail || null,

      mobile: this.Mobile || null,

      address: this.mycity || null,

      password: this.myPassword || null,

      roleId: '3',

      modifiedBy: this.ModifiedBy || null,

      bloodGroup: this.BloodGroup || null,

      emergencyContactNumber: this.EmergencyContactNumber || null,

      emergencyContactName: this.EmergencyContactName || null,

      relationshipStatus: this.RelationshipStatus || null,

      hospitalNumber: this.HospitalNumber || null,

      hospitalName: this.HospitalName || null,

    };

    this.loginService
      .editManager( this.managerId,submitModel)
      .subscribe((res: any) => {
        this.successMessage = res.message;
        if (this.successMessage) {
          this.route.navigateByUrl('society');
        }
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
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(ProfileComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  AllvsitorsType()
  {
  this.route.navigateByUrl(`/all-visitors-type`);
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
  CreateProfile()
  {
    this.route.navigateByUrl(`/all-admin`);
  } 
  WorkerTransaction()
  {
    this.route.navigateByUrl(`/worker-transaction-history`);
  }
  StampPaper() {
    this.route.navigateByUrl(`/stamp-paper`);
 
}

}
