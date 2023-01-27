import { Component ,OnInit} from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EditraisedCategory } from '../models/society.model';
@Component({
  selector: 'app-editraised-complaint',
  templateUrl: './editraised-complaint.component.html',
  styleUrls: ['./editraised-complaint.component.css']
})
export class EditraisedComplaintComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}
  editName:any
  editCategory:any;
  categoryId:any;
  CategoryName:any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  searchText: any;


  ngOnInit(): void {
    this.activeRouter.params.subscribe((param: any) => {
      this.categoryId = param.raiseCategoryId;
      this.CategoryName = param.raiseCategoryName;
      console.log(this.categoryId)
      console.log(this.CategoryName)

    })
  }
  onSubmit() {
    let submitModel:EditraisedCategory = {
      
         raiseCategoryName : this.editName,
      
    };
    this.loginService.EditRaisedCayegory(this.categoryId,submitModel).subscribe((res: any) => {
      this.editCategory = res.response;
  
    });
  }

}
