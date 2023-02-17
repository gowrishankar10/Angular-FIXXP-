import { Component, OnInit ,VERSION  } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AddsocietyComponent } from '../addsociety/addsociety.component';
import { SocietyUploadLogoComponent } from '../society-upload-logo/society-upload-logo.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

constructor (private loginService: LoginService, private toastr: ToastrService, private route: Router, private dialog:MatDialog) { }
  searchText: any;
  logoId:any;
  allSociety: any;
  allBlockData: any;
  pages: number = 1;
  deleteall: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  societyid:any

  ngOnInit(): void {
   

    this.getAllSociety();
  }

  getAllSociety() {
    this.loginService.getSociety().subscribe((res: any) => {
      this.allSociety = res.response;
      this.logoId = res.response[0].id;
      console.log(res);
    });
  }
SocietyLogo(id:string){
  this.route.navigate([`/check-society-logo/${id}`], {
    queryParams: { stateId: this.logoId},
  });
}

UploadLogo(id:string)
{
  this.route.navigate(['society-upload-logo'], {
    queryParams: { societyId: id },
    
  });
  
}


  

  onDetail(id: string) {
    console.log(id)
    this.route.navigateByUrl(`/block/${id}`);
  }

  editSociety(id:string)
  {
    this.route.navigateByUrl(`/edit-society/${id}`)

  }


  delete(id: string) {
    this.loginService.deleteSociety(id).subscribe((res: any) => {
      if (res.flag === 1) {
        this.getAllSociety();
        this.toastr.error('It has been deleted');
      } else if (res.flag === 2) {
        this.toastr.info(res.message);
      }
      this.deleteall = res.response;
      console.log(res)
    })
  }
  // Uploadlogo() {
  //   const dialogRef = this.dialog.open(SocietyUploadLogoComponent);
  //       dialogRef.afterClosed().subscribe((result) => {
  //         console.log(`Dialog result: ${result}`);
  //       });
  //     }


  AddSocietyComponent(){
    this.route.navigateByUrl(`/addsociety`);

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

AddVisitors()
  {
    this.route.navigateByUrl(`/addvisitors`);
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
  DueAmount()
  {
    this.route.navigateByUrl(`/due-amount`);
  }
}

