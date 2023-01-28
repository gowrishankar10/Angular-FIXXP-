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
     this.toBase64(res);

      console.log(this.toBase64(res))
    })
  }

  toBase64(blob: Blob): Observable<string> {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return fromEvent(reader, 'load')
      .pipe(map(() => (reader.result as string)))
    }

}


