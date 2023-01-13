import { Component, OnInit, VERSION } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewmanager',
  templateUrl: './viewmanager.component.html',
  styleUrls: ['./viewmanager.component.css']
})
export class ViewmanagerComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute) {}
  ManagerId:any;
allManager:any




  ngOnInit(): void {
  
    this.AR.params.subscribe((param: any) => {
      this.onManager(param.id)
    })
  }

  onManager(id: string) {
    this.loginService.ManagerById(id).subscribe((res: any) => {
      this.ManagerId = res.response;
      console.log(this.ManagerId);
    });
  }

  addBank(id:string){
    this.route.navigateByUrl(`/addmanagerbankdetail/${id}`)
    
  }

  
  
 
}
