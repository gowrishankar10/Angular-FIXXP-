import { addvisitor } from './../models/society.model';
import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addvisitor',
  templateUrl: './addvisitor.component.html',
  styleUrls: ['./addvisitor.component.css']
})
export class AddvisitorComponent {
  successMessage: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}

  visitorsName: any;
  visitorsId:any;
  allRole: any;
    items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  ngOnInit() {
    this.activeRouter.params.subscribe((param: any) => {
      this.visitorsId = param.id;
      this.visitorsName = param.name;
    })
   
  }

  

  onSubmit() {
    let submitModel:addvisitor = {
      
      visitorTypeName: this.visitorsName,
      
    };
    this.loginService.addvisitors(this.visitorsId,submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      if (this.successMessage) {
        this.route.navigateByUrl('visitors-category');
      }
    });
  }
}
