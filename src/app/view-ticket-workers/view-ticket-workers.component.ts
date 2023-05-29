import { Component } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-ticket-workers',
  templateUrl: './view-ticket-workers.component.html',
  styleUrls: ['./view-ticket-workers.component.css']
})
export class ViewTicketWorkersComponent {
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
  
   
  }

  onManager(id: string) {
    this.loginService.viewTIckectWorkerss(id).subscribe((res: any) => {
      this.WorkkerId = res.response;
      console.log(this.WorkkerId);
    });
  
  }

 

  addBank(id: string) {
    this.route.navigateByUrl(`/addmanagerbankdetail/${id}`);
  }
}
