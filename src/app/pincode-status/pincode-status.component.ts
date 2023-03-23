import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PincodeStatus } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-pincode-status',
  templateUrl: './pincode-status.component.html',
  styleUrls: ['./pincode-status.component.css']
})
export class PincodeStatusComponent {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}
  isactive! : any ;
  PincodeIdValue :any;

  ngOnInit()
  {
    this.activeRouter.queryParams.subscribe((param: any) => {
      this.PincodeIdValue = param.PincodeId;
      
     
    });
  }
   
  onSubmit(value :boolean) {
    let submitModel: PincodeStatus = {

      activeStatus: value ? 1:0,
      
    };

    this.loginService
      .PicodeStatus( this.PincodeIdValue , submitModel)
      .subscribe((res: any) => {
        console.log(res)
        
     
      });
  }
}
