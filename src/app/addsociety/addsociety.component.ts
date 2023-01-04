import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SocietyModel } from '../models/society.model';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-addsociety',
  templateUrl: './addsociety.component.html',
  styleUrls: ['./addsociety.component.css']
})
export class AddsocietyComponent implements OnInit {


  registerForm: any;
  FormGroup: any;
  submitted = false;

  constructor(private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute,
) { }

  allstate: any;
  allcity: any;
  cityId!: string | null;
  pinCodeId!: number | null;
  allPinCode: any;
  societyName!: string | null;
  successMessage!: string;



  ngOnInit() {


    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
    });

  }

  onCity() {
    console.log(this.cityId);
    this.loginService.getallcityid(this.cityId).subscribe((res: any) => {
      this.allcity = res.response;
    });
  }

  onPincode() {
    console.log(this.pinCodeId)
    this.loginService.getpincode(this.pinCodeId).subscribe((res: any) => {
      this.allPinCode = res.response;
    })

  }

  onSubmit() {
    let submitModel: SocietyModel = {
      societyname: this.societyName,
      pincodeModel: {
        pincodeId: this.pinCodeId || null
      }
    }
    this.loginService.addSociety(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      if (this.successMessage) {
        this.route.navigateByUrl('society');
        this.societyName = null;
        this.pinCodeId = null;
        this.cityId = null;

      }
      console.log(res)
    })
  }



}
