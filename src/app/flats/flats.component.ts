import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router, private AR: ActivatedRoute) { }
  items = ['Main Master'];
  itemss = ['User Management '];
  expandedIndex = 0;

  getallFlats:any;
  searchText:any;
  pages: number = 1;
  ngOnInit(): void {

    this.AR.params.subscribe((param: any) => {
      this.Flats(param.id)
    })
  }

  Flats(id: string) {
    this.loginService.getFlats(id).subscribe((res: any) => {
      this.getallFlats = res.response;
      console.log(this.getallFlats);
    });
  }

  onflatuser(id: string) {
    console.log(id)
    this.route.navigateByUrl(`flatusers/${id}`);
  }


}
