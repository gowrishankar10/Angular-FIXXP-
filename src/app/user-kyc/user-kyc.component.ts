import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-user-kyc',
  templateUrl: './user-kyc.component.html',
  styleUrls: ['./user-kyc.component.css']
})
export class UserKycComponent {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}
  kycDetail: any;

  viewKYc: any;

  ngOnInit(): void {
    this.AR.params.subscribe((param: any) => {
      this.viewKyc(param.id,param.id1);
    });
  }

  viewKyc(id: string,id1:string) {
    this.loginService.viewUserKYC(id,id1).subscribe((res: any) => {
      this.viewKYc = res.response;
      console.log(res)
    });
  }
}
