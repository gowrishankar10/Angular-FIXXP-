import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-societysearch',
  templateUrl: './societysearch.component.html',
  styleUrls: ['./societysearch.component.css']
})
export class SocietysearchComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) { }

  allSociety:any;

  title = 'Search Society';

  searchText:any;

  ngOnInit(): void {


    this.loginService.getSociety().subscribe((res: any) => {
      this.allSociety = res.response;
      console.log(this.allSociety);
    });
  }
  
}
