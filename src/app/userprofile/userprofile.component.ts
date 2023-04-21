import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  AllprofileData: any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginService.getProfile('1').subscribe((res: any) => {
      this.AllprofileData = res.response;
      console.log(res);
    });
  }
}
