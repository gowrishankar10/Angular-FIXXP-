import { Component,OnInit} from '@angular/core';
import { LoginService } from '../services/login.service';
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
  itemss = ['User Management '];
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
  onSubmitButton() {
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

 
  }



