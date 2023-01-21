import { Component ,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-daily-helpers-kyc',
  templateUrl: './daily-helpers-kyc.component.html',
  styleUrls: ['./daily-helpers-kyc.component.css']
})
export class DailyHelpersKycComponent implements OnInit {

  

  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}
  
  kycDetail:any;

  

  ngOnInit(): void {
     
   this.AR.params.subscribe((param: any) => {
      this.kycDetailId(param.id) 
    })     
  }

  kycDetailId(id:string)
  {
this.loginService.dailyworkersKyc(id).subscribe((res:any)=>
{
  this.kycDetail= res.response ;
  console.log(res)
})
  }
}

