import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
import { MatDialog } from '@angular/material/dialog';
import { blockStatus } from '../models/society.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute,public dialog: MatDialog,) { }
  blockData: any;
  searchText:any; 
  pages: number = 1;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  ngOnInit(): void {
    this.route.navigateByUrl('[/dashboard]') 

    this.AR.params.subscribe((param: any) => {
      this.onBLock(param.id) 
    })

  }
  onBLock(id: string) {
    this.loginService.blockId(id).subscribe((res: any) => {
      this.blockData = res.response;
      console.log(this.blockData);
    });
  }

  ChangePasswordopenDialog() {
    const dialogRef = this.dialog.open(ChangepasswordComponent);
        dialogRef.afterClosed().subscribe((result) => {
          console.log(`Dialog result: ${result}`);
        });
      }
      onSubmit(value:boolean,id :string) {
        let submitModel: blockStatus = {
    
          activeStatus: value? 1:0,
          
        };
    
        this.loginService
          .blockStatus( id, submitModel)
          .subscribe((res: any) => {
            console.log("im Status" +res)
            
         
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
  FlatsClick(id: string) {
    this.route.navigateByUrl(`/flats/${id}`);
    console.log(id)

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
