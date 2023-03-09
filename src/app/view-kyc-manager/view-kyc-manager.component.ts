import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-view-kyc-manager',
  templateUrl: './view-kyc-manager.component.html',
  styleUrls: ['./view-kyc-manager.component.css']
})
export class ViewKycManagerComponent {


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
    this.loginService.SocietyManagerKyc(id).subscribe((res:any)=>
    {
      this.viewKYc = res.response;
    
      console.log(res)
    })
  }

  approve(id: string)
  {
    this.route.navigate([`/manager-kyc-approve/${id}`], {
      queryParams: { ManagerKyc: id },
      
    });
  }

}
