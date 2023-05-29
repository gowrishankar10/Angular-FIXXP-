import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';
import * as XLSX from 'xlsx';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-stamp-paper',
  templateUrl: './stamp-paper.component.html',
  styleUrls: ['./stamp-paper.component.css']
})
export class StampPaperComponent {

  constructor(private loginService: LoginService, private route: Router,private dialog: MatDialog) { }
  searchText:any; 
  allTickets : any[]=[];
  pages: number = 1;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  expandedIndex = 0;
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  ngOnInit(): void {


    this.loginService.AllStampPapers().subscribe((res: any) => {
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

     addCharges()
     {
      this.route.navigateByUrl('/add-stamp-paper')
     }
     editCharges(id: string)
     {
      this.route.navigate([`/edit-stamp-paper/${id}`], {
        queryParams: { editId: id },
        
      });
     }
     DeleteCharges(id: string)
     {
      this.loginService.DeletestampPaper(id).subscribe((res:any)=>
      {
        
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
     Transactionhitoryomponent()
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
     DueAmount() {
      this.route.navigateByUrl(`/due-amount`);
    }
    CreateProfile()
    {
      this.route.navigateByUrl(`/all-admin`);
    } 
    WorkerTransaction()
    {
      this.route.navigateByUrl(`/all-worker-transaction`);
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
    AddCharges() {
      this.route.navigateByUrl(`/all-charges`);
    }
    
    AgreementType()
    {
      this.route.navigateByUrl('/all-agreement-type');
    }
    

}
