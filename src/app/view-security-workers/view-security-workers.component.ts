import { Component } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-security-workers',
  templateUrl: './view-security-workers.component.html',
  styleUrls: ['./view-security-workers.component.css']
})
export class ViewSecurityWorkersComponent {

  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}
  WorkkerId: any;
  allManager: any;
  ManagerBankId: any;
  banking: any;
  Workerid: any;
  KYCDetail: any;

  ngOnInit(): void {
    this.AR.params.subscribe((param: any) => {
      this.onManager(param.id);
    });
    this.AR.params.subscribe((param: any) => {
      this.onBank();
    });
   
  }

  onManager(id: string) {
    this.loginService.viewtTicketWorkersDetailId(id).subscribe((res: any) => {
      this.WorkkerId = res.response;
      console.log(this.WorkkerId);
    });
    this.ManagerBankId = id;
  }

  onBank() {
    this.loginService.viewbank(this.ManagerBankId).subscribe((res: any) => {
      this.banking = res.response;
      console.log(res);
    });
  }


  addBank(id: string) {
    this.route.navigateByUrl(`/addmanagerbankdetail/${id}`);
  }
}
