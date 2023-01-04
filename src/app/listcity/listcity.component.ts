import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listcity',
  templateUrl: './listcity.component.html',
  styleUrls: ['./listcity.component.css']
})
export class ListcityComponent {

  constructor(private loginService: LoginService, private route: Router) { }
  searchText: any;
  allSociety: any;
  allBlockData: any;
  pages: number = 1;
  allstate:any;
  cityId!: string | null;
  allcity: any;

  ngOnInit(): void {
    this.route.navigateByUrl('[/dashboard]')

    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
    });

    this.loginService.getSociety().subscribe((res: any) => {
      this.allSociety = res.response;
      console.log(res);
    });
}
onCity() {
  console.log(this.cityId);
  this.loginService.getallcityid(this.cityId).subscribe((res: any) => {
    this.allcity = res.response;
  });
}
}
