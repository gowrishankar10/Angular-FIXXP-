
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CityModel, SocietyModel } from '../models/society.model';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent {


  registerForm: any;
  FormGroup: any;
  submitted = false;


  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute) { }

  allstate: any;
  CityName!: string | null;
  successMessage!: string;
  stateId!: number;

  ngOnInit() {

    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
    });


  }
  onState(id: number) {
    // this.loginService.getallstateid(this.stateId).subscribe((res: any) => {
    //   this.allstate = res.response;
    //   console.log(res);
    // });

    this.stateId = id;

  }

  onSubmit() {
    let submitModel: CityModel = {
      cityname: this.CityName,
      stateEntity: {
        stateid: this.stateId || null
      }
    }
    this.loginService.addCity(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      if (this.successMessage) {
        this.route.navigateByUrl('society');

        this.CityName = null;

      }
      console.log(this.CityName)
    })
  }


}


