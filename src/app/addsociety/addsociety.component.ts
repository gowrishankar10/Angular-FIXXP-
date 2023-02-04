import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SocietyModel } from '../models/society.model';


@Component({
  selector: 'app-addsociety',
  templateUrl: './addsociety.component.html',
  styleUrls: ['./addsociety.component.css']
})
export class AddsocietyComponent implements OnInit {


  registerForm: any;
  FormGroup: any;
  submitted = false;

  constructor(private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute,
  ) { }

  allstate: any;
  allcity: any;
  cityId!: any | null;
  pinCodeId!: any | null;
  allPinCode: any;
  societyName!: string | null;
  successMessage!: string;
  societyId!: number;
  stateId: any;
  pinCodeIdAdd: any;
  items = ['Main Master >'];
  itemss = ['User Management >'];
  items1 = ['Society Management >'];
  expandedIndex = 0;
 


  ngOnInit() {
    this.activeRouter.params.subscribe((param: any) => {
      this.societyId = param.id;
      this.societyName = param.name;
    })


    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
    });

  }

  onCity(id: number) {
    console.log(this.stateId);
    this.loginService.getallcityid(this.stateId).subscribe((res: any) => {
      this.allcity = res.response;
    });
  }

  onPincode(id: string) {
    this.cityId = id
    this.loginService.getpincode(this.cityId).subscribe((res: any) => {
      this.allPinCode = res.response;
    })

  }
  onPinCodeId(id: string) {
    console.log(id)

    this.pinCodeIdAdd = id
  }

  onSubmit() {
    let submitModel: SocietyModel = {
      societyname: this.societyName,
      pincodeModel: {
        pincodeId: this.pinCodeIdAdd || null
      }
    }
    if (this.societyId) {
      this.loginService.editSociety(this.societyId, submitModel).subscribe((res: any) => {
        this.successMessage = res.message;
        if (this.successMessage) {
          this.route.navigateByUrl('society');
          this.societyName = null;
          this.pinCodeId = null;
          this.cityId = null;

        }
        console.log(res)
      })
      console.log('edit service is here')

    } else {
      this.loginService.addSociety(submitModel).subscribe((res: any) => {
        this.successMessage = res.message;
        if (this.successMessage) {
          this.route.navigateByUrl('society');
          this.societyName = null;
          this.pinCodeId = null;
          this.cityId = null;

        }
        console.log(res)
      })
    }

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
}
