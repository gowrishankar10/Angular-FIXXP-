import { LoginService } from './../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-society-promotions',
  templateUrl: './society-promotions.component.html',
  styleUrls: ['./society-promotions.component.css']
})
export class SocietyPromotionsComponent {
  
  constructor(private loginService: LoginService, private route: Router) { }
  file:any= File;


  upload() {
    const formData = new FormData();
    formData.append('file', this.file);

    this.loginService.viewPromotions().subscribe((res:any) => {
      console.log(res);
    });
  }
} 

