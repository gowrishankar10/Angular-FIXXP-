import { Role } from './../models/society.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css'],
})
export class AddroleComponent implements OnInit {
  successMessage: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}

  roleName: any;
  roleCode: any;
  allRole: any;
    items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  ngOnInit() {
    this.loginService.allRole().subscribe((res: any) => {
      this.allRole = res.response;
    });
  }

  onSubmit() {
    let submitModel: Role = {
      rolename: this.roleName,
      roleCode: this.roleCode,
    };
    this.loginService.addingRole(submitModel).subscribe((res: any) => {
      this.successMessage = res.message;
      if (this.successMessage) {
        this.route.navigateByUrl('');
      }
    });
  }
}
