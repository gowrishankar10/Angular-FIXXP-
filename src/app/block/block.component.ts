import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute) { }
  blockData: any;
  searchText:any; 
  pages: number = 1;

  ngOnInit(): void {
    this.route.navigateByUrl('[/dashboard]') 

    this.AR.params.subscribe((param: any) => {
      this.onBLock(param.id) 
    })

  }
  onBLock(id: string) {
    this.loginService.blockId(id).subscribe((res: any) => {
      this.blockData = res.response;
      console.log(this.blockData);
    });
  }

  FlatsClick(id: string) {
    this.route.navigateByUrl(`/flats/${id}`);
    console.log(id)

  }





}
