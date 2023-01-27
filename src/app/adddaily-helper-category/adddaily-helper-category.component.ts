import { Component } from '@angular/core';
import { AddDailyHelpers } from '../models/society.model';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-adddaily-helper-category',
  templateUrl: './adddaily-helper-category.component.html',
  styleUrls: ['./adddaily-helper-category.component.css']
})
export class AdddailyHelperCategoryComponent {

  

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
    let submitModel:AddDailyHelpers = {
      
      categoryTypeName: this.addCategory,
      
    };
    this.loginService.addDailyHeplers(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      alert(res.message)
      this.route.navigateByUrl('raised-Complaint')
     
    });
  }
}
