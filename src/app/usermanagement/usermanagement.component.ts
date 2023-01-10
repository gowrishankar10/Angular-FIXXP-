import { Component,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  allUsers: any;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;
  searchText: any;
  constructor(private loginService: LoginService, private route: Router) { }


  pages: number = 1;


  ngOnInit(): void {
    this.route.navigateByUrl('[/dashboard]') 

    this.loginService.getUserManagement().subscribe((res: any) => {
      this.allUsers = res.response;
      console.log(this.allUsers);
    });

  }
 
    viewuser(id: string) {
      console.log(id)
      this.route.navigateByUrl(`/viewuser/${id}`);
    }
   

    
 
}







