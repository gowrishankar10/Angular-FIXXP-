import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-workers',
  templateUrl: './view-workers.component.html',
  styleUrls: ['./view-workers.component.css'],
})
export class ViewWorkersComponent {
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
    this.AR.params.subscribe((param: any) => {
      this.workersKYC(param.id);
    });
  }

  onManager(id: string) {
    this.loginService.viewWorkersDetailId(id).subscribe((res: any) => {
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

  workersKYC(id: string) {
    this.loginService.dailyworkersKyc(id).subscribe((res: any) => {
      this.KYCDetail = res.respons;
    });
  }

  addBank(id: string) {
    this.route.navigateByUrl(`/addmanagerbankdetail/${id}`);
  }
}