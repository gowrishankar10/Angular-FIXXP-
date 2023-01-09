import { Component, OnInit, VERSION } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  constructor(private loginService: LoginService,
    private route: Router,) { }
    allSociety:any;
    searchText:any;
    blockData:any;
    allManager:any;
  pages: number = 1;
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  ngOnInit(): void {
    this.route.navigateByUrl('[/dashboard]')

    this.loginService.allManagerPath().subscribe((res: any) =>
    {
      this.allManager =  res.response;
      console.log(res)

    })
  }

  }


  


