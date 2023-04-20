import { LoginService } from '../services/Login Service/login.service';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  AllprofileData: any;
  LocalId: any = localStorage.getItem('id');


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginService.getProfile(this. LocalId).subscribe((res: any) => {
      this.AllprofileData = res.response;
      console.log(res);
    });
  }
}
