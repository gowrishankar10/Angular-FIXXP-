import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stateStatus } from '../models/society.model';
import { LoginService } from '../services/Login Service/login.service';

@Component({
  selector: 'app-statestatus',
  templateUrl: './statestatus.component.html',
  styleUrls: ['./statestatus.component.css']
})
export class StatestatusComponent  implements OnInit{
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}
  isactive! : any ;
  stateIdValue :any;

  ngOnInit()
  {
    this.activeRouter.queryParams.subscribe((param: any) => {
      this.stateIdValue = param.stateId;
      
     
    });
  }
   
  onSubmit(value :boolean) {
    let submitModel: stateStatus = {

      activeStatus: value ? 1:0,
      
    };

    this.loginService
      .stateStatus( this.stateIdValue , submitModel)
      .subscribe((res: any) => {
        console.log(res)
        
     
      });
  }
}
