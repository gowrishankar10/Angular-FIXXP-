import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css'],
})
export class ViewuserComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}

  userId: any;
  allUserById: any;
  profileId: any;
  viewProfile: any;

  ngOnInit(): void {
    this.AR.params.subscribe((param: any) => {
      this.getUser(param.id);
    });
    this.AR.params.subscribe((param: any) => {
      console.log(param.id);
      this.viewProfiles(param.id);
    });
  }

  getUser(id: string) {
    this.loginService.getUserManagementId(id).subscribe((res: any) => {
      this.allUserById = res.response;
      console.log(this.allUserById);
    });
  }

  viewProfiles(id: string) {
    this.loginService.viewProfilePicture(id).subscribe((res: any) => {
      const profileUrl = res.response.viewProfile;
      const photoUrl = 'http://157.245.105.135:8080/apt/' + profileUrl;
      this.viewProfile = res.response;
      console.log();
    });
  }
}
