import { Component, OnInit, VERSION } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthguardServicesService } from '../Authguard/authguard-services.service';



@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  constructor(private Authguardservice: AuthguardServicesService,private loginService: LoginService, private toastr: ToastrService, private route: Router) { }
  searchText: any;
  allSociety: any;
  allBlockData: any;
  pages: number = 1;
  deleteall: any;
  canActivate(): boolean {
    if (!this.Authguardservice.getToken()) {
      this.route.navigateByUrl("/adminlogin");
    }
    return this.Authguardservice.getToken();
  }


  ngOnInit(): void {
   

    this.getAllSociety();
  }

  getAllSociety() {
    this.loginService.getSociety().subscribe((res: any) => {
      this.allSociety = res.response;
      console.log(res);
    });
  }

  onDetail(id: string) {
    console.log(id)
    this.route.navigateByUrl(`/block/${id}`);
  }


  delete(id: string) {
    this.loginService.deleteSociety(id).subscribe((res: any) => {
      if (res.flag === 1) {
        this.getAllSociety();
        this.toastr.error('It has been deleted');
      } else if (res.flag === 2) {
        this.toastr.info(res.message);
      }
      this.deleteall = res.response;
      console.log(res)
    })
  }

}


