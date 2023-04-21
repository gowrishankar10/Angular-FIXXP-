import { ImagePromotionService } from './../services/promition service/image-promotion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { ProfileComponent } from '../profile/profile.component';
// ...
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-society-promotions',
  templateUrl: './society-promotions.component.html',
  styleUrls: ['./society-promotions.component.css'],
})
export class SocietyPromotionsComponent implements OnInit {
  http: any;

  selectedFile: any = ImageSnippet;
  dateCheck: any;
  today = new Date();
  effeDate: any;
  validDate: any;
  status: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  items2 = ['Transactions'];
  expandedIndex = 0;
  LocalName: any = localStorage.getItem('name');
  LocalId: any = localStorage.getItem('id');
  postPromo: any;
  Logged: any = localStorage.getItem('lastLogedon');
  AdminName: any = localStorage.getItem('name');
  Name:any;
  constructor(
    private ImagePromotionService: ImagePromotionService,
    private route: Router,
    private toastr: ToastrService,private dialog: MatDialog, private loginService:LoginService
  ) {}

  ngOnInit(): void {
    let date = moment(new Date(this.today))
      .format('yyyy-MM-dd hh:mm:ss')
      .toString();
    this.dateCheck = date;
  }

  societyPromo()
  {
    this.route.navigateByUrl('/society-based-promotions')
  }

  addpromotion() {
    let effdate = (<HTMLInputElement>document.getElementById('effdate')).value;
    let validdate = (<HTMLInputElement>document.getElementById('validdate')).value;
    let status = (<HTMLInputElement>document.getElementById('status')).value;

    let d = effdate.concat(':00');
    let effDate = new Date(d);

    let d1 = validdate.concat(':00');
    let vaiDate = new Date(d1);

    let input = new FormData();

    input.append('effectiveDate', JSON.stringify(effDate.getTime()));
    input.append('validUptoDate', JSON.stringify(vaiDate.getTime()));
    input.append('createdBy', this.LocalName);
    input.append('userId', this.LocalId);
    input.append('status', '1');
    input.append('bannerImage', this.selectedFile);
  }

  processFile(imageInput: any) {
    let effdate = (<HTMLInputElement>document.getElementById('effdate')).value;
    let validdate = (<HTMLInputElement>document.getElementById('validdate'))
      .value;

    let startdate = moment(effdate).format('DD-MM-yyyy hh:mm:ss').toString();
    console.log(startdate);

    console.log(validdate);
    let enddate = moment(validdate).format('DD-MM-yyyy hh:mm:ss').toString();
    console.log(enddate);

    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      const formData = new FormData();

      formData.append('startDate', startdate);
      formData.append('validDate', enddate);
      formData.append('createdBy', this.LocalName);
      formData.append('userId', this.LocalId);
      formData.append('status', '1');
      formData.append('bannerImage', this.selectedFile.file);
      this.ImagePromotionService.uploadImage(formData).subscribe((res: any) => {
        this.postPromo = res.response;
        if (res.flag === 1) {
          this.toastr.info(res.message);
        }
      });
    });

    reader.readAsDataURL(file);
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
  updatePromo()
  {
    this.route.navigateByUrl('/update-promotion')
  }

  DashboardComponent() {
    this.route.navigateByUrl(`/dashboard`);
  }
  SocietyComponent() {
    this.route.navigateByUrl(`/society`);
  }
  TransactionhitoryComponent() {
    this.route.navigateByUrl(`/transactionhistory`);
  }
  TicketsComponenets() {
    this.route.navigateByUrl(`/tickets`);
  }
  ManagerComponents() {
    this.route.navigateByUrl(`/manager`);
  }
  UsermanagementComponent() {
    this.route.navigateByUrl(`/usermanagement`);
  }
  ListcityComponent() {
    this.route.navigateByUrl(`/listcity`);
  }
  ListpincodeComponenet() {
    this.route.navigateByUrl(`/listpincode`);
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
