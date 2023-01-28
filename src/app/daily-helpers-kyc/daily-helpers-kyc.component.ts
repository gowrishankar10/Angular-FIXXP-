import { Component ,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
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
  
  imgurl:any
  ngOnInit(): void {
     

    this.AR.params.subscribe((param: any) => {
      this.viewKyc(param.id) 
    })
    this.AR.params.subscribe((param: any) => {
      this.image(param.id) 
    })
   
  }


  viewKyc(id:string)
  {
    this.loginService.viewdailyworkerKyc(id).subscribe((res:any)=>
    {
      this.viewKYc = res.response;
    })
  }

  image(id: string)
  {
    this.loginService.image(id).subscribe((res:any)=>
    {

      const mediaType = 'application/image';
      const blob = new Blob([res], { type: mediaType });
      console.log(blob)
    })
  }

}


