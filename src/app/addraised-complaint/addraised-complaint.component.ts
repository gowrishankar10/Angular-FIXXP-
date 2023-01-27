import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RaisedCategory } from '../models/society.model';
@Component({
  selector: 'app-addraised-complaint',
  templateUrl: './addraised-complaint.component.html',
  styleUrls: ['./addraised-complaint.component.css']
})
export class AddraisedComplaintComponent {



  successMessage: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}

  addCategory: any;
  visitorsId:any;
  allRole: any;
    items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  ngOnInit() {
   
  }

  

  onSubmit() {
    let submitModel:RaisedCategory = {
      
      raiseCategoryName: this.addCategory,
      
    };
    this.loginService.addRaisedCategory(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      alert(res.message)
      this.route.navigateByUrl('raised-Complaint')
     
    });
  }
}
