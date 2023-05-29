import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';
import * as XLSX from 'xlsx';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-all-charges',
  templateUrl: './all-charges.component.html',
  styleUrls: ['./all-charges.component.css']
})
export class AllChargesComponent {

  constructor(private loginService: LoginService, private route: Router ,public dialog: MatDialog,) { }
  searchText:any; 
  allTickets : any[]=[];
  pages: number = 1;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  expandedIndex = 0;
  
  ngOnInit(): void {


    this.loginService.allCharges().subscribe((res: any) => {
         this.allTickets = res.response;
         console.log(res);
       });
     }
     name = 'ExcelSheet.xlsx';
     exportToExcel(): void {
       let element = document.getElementById('season-tble');
       const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
   
       const book: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
   
       XLSX.writeFile(book, this.name);
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
     addCharges()
     {
      this.route.navigateByUrl('/add-charges')
     }
     editCharges(id: string)
     {
      this.route.navigate([`/edit-charges/${id}`], {
        queryParams: { editId: id },
        
      });
     }
     DeleteCharges(id: string)
     {
      this.loginService.deleteCharge (id).subscribe((res:any)=>
      {
        
      })
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
  AllvsitorsType()
  {
    this.route.navigateByUrl(`/all-visitors-type`);
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
   WorkersSlot()
   {
     this.route.navigateByUrl('/getallworker-time-slot')
   }
   
AgreementType()
{
  this.route.navigateByUrl('/all-agreement-type');
}

}
