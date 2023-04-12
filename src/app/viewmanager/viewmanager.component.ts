import { Component, OnInit, VERSION } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerStatus, stateStatus } from '../models/society.model';

@Component({
  selector: 'app-viewmanager',
  templateUrl: './viewmanager.component.html',
  styleUrls: ['./viewmanager.component.css'],
})
export class ViewmanagerComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private AR: ActivatedRoute
  ) {}
  ManagerId: any;
  allManager: any;
  ManagerBankId: any;
  banking: any;
  pages: number = 1;
  searchText: any;
  expandedIndex = 0;
  
  ngOnInit(): void {
    this.AR.params.subscribe((param: any) => {
      this.onManager(param.id);
    });
    this.AR.params.subscribe((param: any) => {
      this.onBank();
    })
  }
  onSubmit(value:boolean,id :string) {
    let submitModel: ManagerStatus = {

      bankStatus: value? 1:0,
      
    };

    this.loginService
      .ManagerBankStatus( id, submitModel)
      .subscribe((res: any) => {
        console.log("im Status" +res)
        
     
      });
  }
  onManager(id: string) {
    this.loginService.ManagerById(id).subscribe((res: any) => {
      this.ManagerId = res.response;
      console.log(this.ManagerId);
    });
    this.ManagerBankId=id;
  }
  onBank() {
    this.loginService.viewbank(this.ManagerBankId).subscribe((res: any) => {
      this.banking = res.response;
      console.log("im Bank "+this.banking);
    });
  }
  addBank(id: string) {
    this.router.navigateByUrl(`/addmanagerbankdetail/${id}`);
  }

  ManagersComponents() {
    this.router.navigateByUrl(`/manager`);
  }
}
