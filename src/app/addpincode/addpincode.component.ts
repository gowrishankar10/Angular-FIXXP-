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



  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute) { }

  successMessage!: string;
  PincodeNumber!: any;
  cityId: any;
  pincodeId: any;
  allcity:any;
  ngOnInit() {

    this.loginService.getallcity().subscribe((res: any) => {
      this.allcity = res.response;
      console.log(this.allcity);
    });


  }

  onCity() {
    this.loginService.getallcityid(this.cityId).subscribe((res: any) => {
      this.allcity = res.response;
      console.log(this.allcity);
    });
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
        this.route.navigateByUrl('listpincode');

        this.PincodeNumber = null;

      }
      return 'not a correct Input'
    
      console.log()
    })
  }


}


