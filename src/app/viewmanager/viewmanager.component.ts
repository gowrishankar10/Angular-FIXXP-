import { Component, OnInit, VERSION } from '@angular/core';
import { LoginService } from '../services/Login Service/login.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewmanager',
  templateUrl: './viewmanager.component.html',
  styleUrls: ['./viewmanager.component.css']
})
export class ViewmanagerComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute) {}
  ManagerId:any;
allManager:any;
ManagerBankId:any;
banking:any;



  ngOnInit(): void {
  
    this.AR.params.subscribe((param: any) => {
      this.onManager(param.id)
    })
    this.AR.params.subscribe((param: any) => {
      this.onBank();
    })
  }

  onManager(id: string) {
    this.loginService.ManagerById(id).subscribe((res: any) => {
      this.ManagerId = res.response;
      console.log(this.ManagerId);
    });
    this.ManagerBankId=id;
  }

  onBank(){
    this.loginService.viewbank(this.ManagerBankId).subscribe((res:any)=>
    {
      this.banking = res.response;
console.log(res)
    })
  }
  

  addBank(id:string){
    this.route.navigateByUrl(`/addmanagerbankdetail/${id}`)
    
  }

  
  
 
}
