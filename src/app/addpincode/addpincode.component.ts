import { Component } from '@angular/core';
import { CityModel, PincodeNumber } from '../models/society.model';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http2ServerRequest } from 'http2';
@Component({
  selector: 'app-addpincode',
  templateUrl: './addpincode.component.html',
  styleUrls: ['./addpincode.component.css']
})
export class AddpincodeComponent {



  registerForm: any;
  FormGroup: any;
  submitted = false;



  constructor(private loginService: LoginService, private router: Router, private AR: ActivatedRoute) { }

  successMessage!: string;
  PincodeNumber!: any;
  stateId: any;
  cityId: any;
  pincodeId: any;
  allcity: any;
  allState: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  ngOnInit() {

    this.loginService.getallstate().subscribe((res: any) => {
      this.allState = res.response;
    })

  }
  onCity(id: string) {
    console.log("state id :" + id)
    this.loginService.getallcityid(id).subscribe((res: any) => {
      this.allcity = res.response;
      console.log(this.allcity);


    });
    this.stateId = id;
  }
  onCityId(id: string) {
    this.cityId = id;
  }


  onSubmit() {
    let submitModel: PincodeNumber = {
      pincodeNumber: this.PincodeNumber,
      cityEntity: {
        cityid: this.cityId || null,
      }
    }

    this.loginService.addpincode(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      if (this.successMessage) {
        this.router.navigateByUrl('listpincode');

        this.PincodeNumber = null;

      }
      return 'not a correct Input'

      console.log()
    })
  }


}


