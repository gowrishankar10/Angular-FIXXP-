import { Component,OnInit} from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { managerBankDetail } from '../models/society.model';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addmanagerbankdetail',
  templateUrl: './addmanagerbankdetail.component.html',
  styleUrls: ['./addmanagerbankdetail.component.css']
})
export class AddmanagerbankdetailComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute,public dialog: MatDialog) {}
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  expandedIndex = 0;
  allSociety:any;
  managerId:any;
  BankName:any;
  BankAccountName:any;
  BankAccountNo:any;
  IfscCode:any;
  BankBranch:any;
  bankdetail:any;
  SocietyMAnagerId:any;
  ManagerId:any;
  ngOnInit(): void {
    this.AR.params.subscribe((param: any) => {
      this.onManger(param.id)
    })

  }


  onManger(id: string) {
    console.log(id)
    this.managerId = id;
  }
  onSubmitButton()
   {
    let submitModel: managerBankDetail = {
      
      bankName: this.BankName,

       bankAccountName: this.BankAccountName,
    
       bankAccountNumber: this.BankAccountNo,
    
       iFSCCode: this.IfscCode,
    
     bankBranch: this.BankBranch,
    
     societyManagerId: this.managerId,
    
   
    };

    this.loginService
      .addManagerBankDetail(submitModel)
      .subscribe((res: any) => {
      if(res.Data.flag==1)
      {
        this.route.navigateByUrl('/viewmanager')
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
 ViewUserManagement(){
  this.route.navigateByUrl(`/viewmanager`);
 }
 DueAmount()
 {
   this.route.navigateByUrl(`/due-amount`);
 }
 WorkerTransaction()
 {
   this.route.navigateByUrl(`/all-worker-transaction`);
 }

CreateProfile()
{
 this.route.navigateByUrl(`/all-admin`);
}

 StampPaper() {
   this.route.navigateByUrl(`/stamp-paper`);
 
 }
 HomeTransaction()
{
this.route.navigateByUrl(`/home-transaction`);
}
RentPay()
{
this.route.navigateByUrl(`/rent-pay`);
}
  }



