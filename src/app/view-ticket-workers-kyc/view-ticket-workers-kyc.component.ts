import { Component } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-ticket-workers-kyc',
  templateUrl: './view-ticket-workers-kyc.component.html',
  styleUrls: ['./view-ticket-workers-kyc.component.css']
})
export class ViewTicketWorkersKycComponent {
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
    this.loginService.viewTicketworkerKyc(id).subscribe((res:any)=>
    {
      this.viewKYc = res.response;
    })
  }
 



}



