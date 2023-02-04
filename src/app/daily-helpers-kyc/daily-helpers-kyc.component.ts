import { Component ,OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router,ActivatedRoute } from '@angular/router';
import { fromEvent, map, Observable } from 'rxjs';
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
      this.flagid= 1;
      console.log(res)
    })
  }

}
