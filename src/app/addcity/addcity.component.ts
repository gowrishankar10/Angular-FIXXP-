import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CityModel, SocietyModel } from '../models/society.model';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators'

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css'],
})
export class AddcityComponent {

  
  registerForm: any;
  FormGroup: any;
  submitted = false;
  autosize: any;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute,
    private _ngZone: NgZone
  ) {}

  

  allstate: any;
  CityName!: string | null;
  successMessage!: string;
  stateId!: number;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  
  ngOnInit() {

    this.loginService.getallstate().subscribe((res: any) => {
      this.allstate = res.response;
      console.log(this.allstate);
    });
  }
  onState(id: number) {
    this.stateId = id;
  }

  onSubmit() {
    let submitModel: CityModel = {
      cityname: this.CityName,
      stateEntity: {
        stateid: this.stateId || null,
      },
    };
    this.loginService.addCity(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      if (this.successMessage) {
        this.route.navigateByUrl('society');

        this.CityName = null;
      }
      console.log(this.CityName);
    });
  }
  


  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
  
}
