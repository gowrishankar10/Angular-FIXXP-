import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpincode',
  templateUrl: './listpincode.component.html',
  styleUrls: ['./listpincode.component.css']
})
export class ListpincodeComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router) { }

  searchText: any;
  allSociety: any;
  allBlockData: any; 
  pages: number = 1;
  cityId!: string | null;
  allcity: any;
  allPinCode:any;
  pinCodeId: any;

  
  ngOnInit(): void {

    this.loginService.getallcity().subscribe((res: any) => {
      this.allcity = res.response;
      console.log(this.allcity);
    });
}



  onPincode() {
    console.log(this.pinCodeId)
    this.loginService.getpincode(this.pinCodeId).subscribe((res: any) => {
      this.allPinCode = res.response;
    })

  
}



}