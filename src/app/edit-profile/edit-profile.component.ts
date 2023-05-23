import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProfile } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  successMessage: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}

  roleName: any;
  roleCode: any;
  allRole: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;

  FullName: any;
  Email: any;
  Address: any;
  Mobile: any;
  Password: any;
  IPAddress: any;
  FirebaseId: any;
  DeviceName: any;
  DeviceNumber: any;
  DeviceType: any;
  DeviceModel: any;
  LocalId: any = localStorage.getItem('id');

  ngOnInit() {
    this.loginService.allRole().subscribe((res: any) => {
      this.allRole = res.response;
     
    });
  }

  onSubmit() {
    let submitModel: CreateProfile = {
      
    
      fullName: this.FullName,

      address: this.Address,

      email: this.Email,

      mobile: this.Mobile,

      password: this.Password,

      roleId: '2',

      ipaddress: this.IPAddress,

      firebaseId: this.FirebaseId,

      deviceName: this.DeviceName,

      deviceNumber: this.DeviceNumber,

      deviceType: this.DeviceType,

      deviceModel: this.DeviceModel,
    };

    this.loginService.EditProfiles(this.LocalId,submitModel).subscribe((res: any) => {

      if(res.Data.flag==1)
      {
       this.route.navigateByUrl('/all-admin')
      }
      else
        alert(" Mail/Number Already Exist")
    
    
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
  DueAmount() {
    this.route.navigateByUrl(`/due-amount`);
  }
}
