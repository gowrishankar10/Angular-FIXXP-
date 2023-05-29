import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerApprove } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-manager-kyc-approve',
  templateUrl: './manager-kyc-approve.component.html',
  styleUrls: ['./manager-kyc-approve.component.css']
})
export class ManagerKycApproveComponent {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ApprovalStatus: any;
  LocalName: any = localStorage.getItem('name');
  successMessage: any;
  roleCode: any;
  ApprovalBy: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  ManagerID:any

  ngOnInit() {
    this.activeRouter.queryParams.subscribe((param: any) => {
      this.ManagerID = param.ManagerKyc;
      // console.log('OTP page ' + this.ManagerID);
    });
    this.loginService.allRole().subscribe((res: any) => {
    });
  }

  onSubmit() {
    let submitModel: ManagerApprove = {
      approvalStatus: this.ApprovalStatus,
      approvalBy: this.LocalName,
      
    };
    this.loginService.ManagerApproves(  this.ManagerID,submitModel).subscribe((res: any) => {
    
      this.successMessage = res.message;{
      
        if(res.flag===1)
        this.route.navigateByUrl('/manager');
      }
    });
  }

}