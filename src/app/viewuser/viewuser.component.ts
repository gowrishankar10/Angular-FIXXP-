import { managerBankDetail } from './../models/society.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateUser } from '../models/society.model';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css'],
})
export class ViewuserComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}
  pages: number = 1;
  searchText: any;
  isChecked: boolean = true;
  expandedIndex = 0;
  userId: any;
  userIds: any;
  BankDetail: any;

  isactive: boolean = false;

  allUserById: any;
  profileId: any;
  viewProfile: any;

  ngOnInit(): void {
    this.AR.params.subscribe((param: any) => {
      this.getUser(param.id);
    });
    this.AR.params.subscribe((param: any) => {
      this.managerBankDetail(param.id);
    });
    // this.AR.params.subscribe((param: any) => {
    //   console.log(param.id);
    //   this.viewProfiles(param.id);
    // });
  }

  getUser(id: string) {
    this.loginService.getUserManagementId(id).subscribe((res: any) => {
      this.allUserById = res.response;
      console.log(this.allUserById);
      this.userIds = id;
      this.isactive = res.response.userStatus == 1;
    });
  }
  managerBankDetail(id: string) {
    this.loginService.UserBankDetail(id).subscribe((res: any) => {
      this.BankDetail = res.response;
      console.log(this.BankDetail);
      this.userIds = id;
    });
  }

  // viewProfiles(id: string) {
  //   this.loginService.viewProfilePicture(id).subscribe((res: any) => {
  //     const profileUrl = res.response.viewProfile;
  //     const photoUrl = 'http://157.245.105.135:8080/apt/' + profileUrl;
  //     this.viewProfile = res.response;
  //     console.log();
  //   });
  // }
  onSubmit(value: boolean) {
    let submitModel: UpdateUser = {
      userStatus: value ? 1 : 0,
    };
    this.loginService
      .userActive(this.userIds, submitModel)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
