import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { createManager } from '../models/society.model';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css'],
})
export class AddmanagerComponent implements OnInit {
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
    private AR: ActivatedRoute,public dialog: MatDialog
  ) {}

  allSociety: any;
  societyId: any;
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
    let submitModel: createManager = {
      fullname: this.fullName || null,

      email: this.myemail || null,

      mobile: this.Mobile || null,

      address: this.mycity || null,

      password: this.myPassword || null,

      roleId: '3',

      societyId: this.societyId || null,

      bloodGroup: this.BloodGroup || null,

      emergencyContactNumber: this.EmergencyContactNumber || null,

      emergencyContactName: this.EmergencyContactName || null,

      relationshipStatus: this.RelationshipStatus || null,

      hospitalNumber: this.HospitalNumber || null,

      hospitalName: this.HospitalName || null,

    };

    this.loginService
      .createManagerDetails(submitModel)
      .subscribe((res: any) => {
        this.successMessage = res.message;
        if (res.flag==1) {
          this.route.navigateByUrl('/manager');
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
  
}
