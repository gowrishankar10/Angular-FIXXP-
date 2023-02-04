import { Component, OnInit,} from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-idbyusername',
  templateUrl: './idbyusername.component.html',
  styleUrls: ['./idbyusername.component.css']
})
export class IdbyusernameComponent implements OnInit {
  AllusersData: any;

  constructor(private loginService: LoginService, private AR: ActivatedRoute) { }

  ngOnInit(): void {

    this.AR.params.subscribe((param: any) => {
      this.Userid(param.id) 
    })

  }
  Userid(id: string) {
    this.loginService.getUserManagementId(id).subscribe((res: any) => {
      this.AllusersData = res.response;
      console.log(this.AllusersData);
    });
  }
}
