import { Component } from '@angular/core';
import { PincodeNumber } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http2ServerRequest } from 'http2';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-addpincode',
  templateUrl: './addpincode.component.html',
  styleUrls: ['./addpincode.component.css']
})
export class AddpincodeComponent {



  registerForm: any;
  FormGroup: any;
  submitted = false;



  constructor(private loginService: LoginService, private router: Router, private AR: ActivatedRoute,
    public dialog: MatDialog) { }

  successMessage!: string;
  PincodeNumber!: any;
  stateId: any;
  cityId: any;
  pincodeId: any;
  allcity: any;
  allState: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  ngOnInit() {

    this.loginService.getallstate().subscribe((res: any) => {
      this.allState = res.response;
    })

  }
  onCity(id: number) {
    console.log("state id :" + id)
    this.loginService.getallcityid(id).subscribe((res: any) => {
      this.allcity = res.response;
      console.log(this.allcity);


    });
    this.stateId = id;
  }
  onCityId(id: string) {
    this.cityId = id;
  }


  onSubmit() {
    let submitModel: PincodeNumber = {
      pincodeNumber: this.PincodeNumber,
      cityEntity: {
        cityid: this.cityId || null,
      }
    }

    this.loginService.addpincode(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      if (this.successMessage) {
        this.router.navigateByUrl('listpincode');

        this.PincodeNumber = null;

      }
      return 'not a correct Input'

      console.log()
    })
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
  this.router.navigateByUrl(`/all-visitors-type`);
  }
  DashboardComponent()
  {
    this.router.navigateByUrl(`/dashboard`);
  }
  SocietyComponent()
  {
    this.router.navigateByUrl(`/society`);
  }
  TransactionhitoryComponent()
  {
    this.router.navigateByUrl(`/transactionhistory`);
  }
  TicketsComponenets()
  {
    this.router.navigateByUrl(`/tickets`);
  }
  ManagerComponents()
  {
    this.router.navigateByUrl(`/manager`);
  }
  UsermanagementComponent()
  {
    this.router.navigateByUrl(`/usermanagement`);
  }
  ListcityComponent()
  {
    this.router.navigateByUrl(`/listcity`);
  }
  ListpincodeComponenet()
  {
    this.router.navigateByUrl(`/listpincode`);
  }
  Dashboard()
  {
    this.router.navigateByUrl(`/dashboard`);
  }
  ListstateComponent()
  {
    this.router.navigateByUrl(`/liststate`);
  }
  RolelistComponent()
  {
    this.router.navigateByUrl(`/rolelist`);
  }
  SocietyBasedVisitorsComponent()
  {
    this.router.navigateByUrl(`/society-based-visitors`);
  }
  SocietyDailyWorkersComponent()
  {
    this.router.navigateByUrl(`/society-daily-workers`);
  }
  SocietyEmergencyContactComponent()
  {
    this.router.navigateByUrl(`/society-emergency-contact`);
  }
  SocietySecurityGuardComponent()
  {
    this.router.navigateByUrl(`/society-security-guard`);
  }
  SocietyTicketWorkersComponent()
  {
    this.router.navigateByUrl(`/society-ticket-workers`);
  }

  VisitorCategoryComponent()
  {
    this.router.navigateByUrl(`/visitors-category`);
  }
  ComplaintCategory()
  {
    this.router.navigateByUrl(`/raised-Complaint`);
  }
  DaikyHelp()
  {
    this.router.navigateByUrl(`/daily-helper-category`);
  }
  SocietyPromotion()
  {
    this.router.navigateByUrl(`/society-promotions`);
  }
  DueAmount()
  {
    this.router.navigateByUrl(`/due-amount`);
  }
  CreateProfile()
  {
    this.router.navigateByUrl(`/all-admin`);
  } 
  WorkerTransaction()
  {
    this.router.navigateByUrl(`/worker-transaction-history`);
  }
  StampPaper() {
    this.router.navigateByUrl(`/stamp-paper`);
  
  }
}


