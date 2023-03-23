import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router } from '@angular/router';
import { AddpincodeComponent } from '../addpincode/addpincode.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
import { PincodeStatus } from '../models/society.model';

@Component({
  selector: 'app-listpincode',
  templateUrl: './listpincode.component.html',
  styleUrls: ['./listpincode.component.css'],
})
export class ListpincodeComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router,public dialog: MatDialog,private toastr: ToastrService) { }

  searchText: any;
  allSociety: any;
  allBlockData: any;
  pages: number = 1;
  cityId!: string | null;
  allcity: any;
  allPinCode: any;
  pinCodeId: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  delpincode: any;

  ngOnInit(): void {
    this.loginService.getallcity().subscribe((res: any) => {
      this.allcity = res.response;
      console.log("im City :"+res);
    });
  }

  onPincode() {
    console.log(this.pinCodeId);
    this.loginService.getpincode(this.pinCodeId).subscribe((res: any) => {
      this.allPinCode = res.response;
      console.log(this.allPinCode)
      if (res.flag === 2) {
        this.toastr.error(res.message);
      }    
    })
}
Status(id : string)
{
  this.route.navigate([`/pincode-status/${id}`], {
    queryParams: { PincodeId: id },
  });

}

editpincode(id: string)
    {
      this.route.navigateByUrl(`/edit-pincode/${id}`)
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
    onSubmit(value:boolean,id :string) {
      let submitModel: PincodeStatus = {
  
        activeStatus: value? 1:0,
        
      };
  
      this.loginService
        .stateStatus( id, submitModel)
        .subscribe((res: any) => {
          console.log("im Status" +res)
          
       
        });
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
Addpincode()
  {
    this.route.navigateByUrl(`/addpincode`);
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
  CreateProfile()
  {
    this.route.navigateByUrl(`/all-admin`);
  } 
  WorkerTransaction()
  {
    this.route.navigateByUrl(`/worker-transaction-history`);
  }

}

// openDialog() {
//   const dialogRef = this.dialog.open(AddpincodeComponent);

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(`Dialog result: ${result}`);
//   });
// }
