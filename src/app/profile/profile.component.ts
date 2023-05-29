import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { LoginService } from '../Services/login.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  AllprofileData: any;
  profile :any = localStorage.getItem("id")

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginService.getProfile(this.profile).subscribe((res: any) => {
      this.AllprofileData = res.response;
      console.log(res);
    });
  }
}
