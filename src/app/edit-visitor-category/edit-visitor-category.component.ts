import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { editVisitorCategory } from '../models/society.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-edit-visitor-category',
  templateUrl: './edit-visitor-category.component.html',
  styleUrls: ['./edit-visitor-category.component.css']
})
export class EditVisitorCategoryComponent {
  successMessage: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}

  VisitorsName: any;
  roleCode: any;
  allRole: any;
    items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  visitorTypeId:any;
  visitorTypeName:any;

  ngOnInit() {
    this.activeRouter.params.subscribe((param: any) => {
      this.visitorTypeId = param.id;
      this.visitorTypeName = param.name;
    });

  
  }

  onSubmit() {
    let submitModel: editVisitorCategory = {
      visitorTypeName: this.VisitorsName,
 
    };
    this.loginService.editVisitorsCategory(this.visitorTypeId,submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      if (res.flag===1) {
        this.route.navigateByUrl('/visitor-category');
      }
    });
  }
}
