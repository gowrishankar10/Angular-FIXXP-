import { Component,OnInit} from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { managerBankDetail } from '../models/society.model';

@Component({
  selector: 'app-addmanagerbankdetail',
  templateUrl: './addmanagerbankdetail.component.html',
  styleUrls: ['./addmanagerbankdetail.component.css']
})
export class AddmanagerbankdetailComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute) {}
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
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
      
      });

      this.route.navigateByUrl('/viewmanager')
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
  }



