import { Component ,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-security-workers-kyc',
  templateUrl: './view-security-workers-kyc.component.html',
  styleUrls: ['./view-security-workers-kyc.component.css']
})
export class ViewSecurityWorkersKycComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {} 

  kycDetail:any;
  viewKYc:any

  ngOnInit(): void {
   
 
    
    this.AR.params.subscribe((param: any) => {
      this.viewKyc(param.id) 
    })
   
  }


  viewKyc(id:string)
  {
    this.loginService.viewSecurityworkerKyc(id).subscribe((res:any)=>
    {
      this.viewKYc = res.response;
    })
  }
 



}
