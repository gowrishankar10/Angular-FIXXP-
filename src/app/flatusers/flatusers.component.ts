import { RentalService } from '../Services/Rental Agreement/rental.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-flatusers',
  templateUrl: './flatusers.component.html',
  styleUrls: ['./flatusers.component.css'],
})
export class FlatusersComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router,private AR: ActivatedRoute,
     private RentalService : RentalService,private toastr: ToastrService ,public dialog: MatDialog) { }
  items = ['Main Master'];
  itemss = ['User Management'];
  expandedIndex = 0;
  items1 = ['Society Management'];
  items2 = ['Transactions'];

  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  getallFlatusers: any;
  pages: number = 1;
  searchText: any;
  AddFlatID: any;
  ngOnInit(): void {
    this.AR.params.subscribe((param: any) => {
      this.Flatusers(param.id);
    });
  
  }
  Flatusers(id: string) {
    this.loginService.getFlatusers(id).subscribe((res: any) => {
      this.getallFlatusers = res.response;
      console.log(res);
    });
  }

  PDF(id: string) {
    this.RentalService.DownloadPdf(id).subscribe((pdfData) => {
      saveAs(new Blob([pdfData]), '<Rental Agrement->.pdf');
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

    
  DashboardComponent()
  {
    this.router.navigateByUrl(`/dashboard`);
  }
  SocietyComponent() {
    this.router.navigateByUrl(`/society`);
  }
  TransactionhitoryComponent() {
    this.router.navigateByUrl(`/transactionhistory`);
  }
  TicketsComponenets() {
    this.router.navigateByUrl(`/tickets`);
  }
  ManagerComponents() {
    this.router.navigateByUrl(`/manager`);
  }
  UsermanagementComponent() {
    this.router.navigateByUrl(`/usermanagement`);
  }
  ListcityComponent() {
    this.router.navigateByUrl(`/listcity`);
  }
  ListpincodeComponenet() {
    this.router.navigateByUrl(`/listpincode`);
  }

  Dashboard() {
    this.router.navigateByUrl(`/dashboard`);
  }
  ListstateComponent() {
    this.router.navigateByUrl(`/liststate`);
  }
  RolelistComponent() {
    this.router.navigateByUrl(`/rolelist`);
  }
  SocietyBasedVisitorsComponent() {
    this.router.navigateByUrl(`/society-based-visitors`);
  }
  SocietyDailyWorkersComponent() {
    this.router.navigateByUrl(`/society-daily-workers`);
  }
  SocietyEmergencyContactComponent() {
    this.router.navigateByUrl(`/society-emergency-contact`);
  }
  SocietySecurityGuardComponent() {
    this.router.navigateByUrl(`/society-security-guard`);
  }
  SocietyTicketWorkersComponent() {
    this.router.navigateByUrl(`/society-ticket-workers`);
  }
  VisitorCategoryComponent() {
    this.router.navigateByUrl(`/visitors-category`);
  }
  ComplaintCategory() {
    this.router.navigateByUrl(`/raised-Complaint`);
  }
  DaikyHelp() {
    this.router.navigateByUrl(`/daily-helper-category`);
  }
  SocietyPromotions() {
    this.router.navigateByUrl(`/society-promotions`);
  }
  SocietyPromotion() {
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
  AllvsitorsType()
  {
    this.router.navigateByUrl(`/all-visitors-type`);
  }
  WorkerTransaction()
  {
    this.router.navigateByUrl(`/all-worker-transaction`);
  }
  StampPaper() {
    this.router.navigateByUrl(`/stamp-paper`);
  
  }
  HomeTransaction()
{
this.router.navigateByUrl(`/home-transaction`);
}
RentPay()
{
this.router.navigateByUrl(`/rent-pay`);
}
WorkersSlot()
{
  this.router.navigateByUrl('/getallworker-time-slot')
}



  }
  
  
