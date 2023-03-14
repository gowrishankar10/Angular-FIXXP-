import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-all-users-kyc',
  templateUrl: './all-users-kyc.component.html',
  styleUrls: ['./all-users-kyc.component.css']
})
export class AllUsersKycComponent {


  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}
  
  kycDetail:any;
  imageSrc:any;
  viewKYc:any;
  DOCId:any;
  Flag:any;
  flagid:any

  
  imgurl:any
  ngOnInit(): void {
     
    this.AR.params.subscribe((param: any) => {
      this.DOCId = param.id;
      this.Flag = param.name;
    })

    this.AR.params.subscribe((param: any) => {
      this.viewKyc(param.id) 
    })
   
  }


  viewKyc(id:string)
  {
    this.loginService.viewdailyworkerKyc(id).subscribe((res:any)=>
    {
      this.viewKYc = res.response;
    
      console.log(res)
    })
  }

}
