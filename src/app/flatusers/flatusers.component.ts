import { Component , OnInit} from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-flatusers',
  templateUrl: './flatusers.component.html',
  styleUrls: ['./flatusers.component.css']
})
export class FlatusersComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router,private AR: ActivatedRoute) { }

  getallFlatusers:any;
  pages: number = 1;
  searchText:any;
  ngOnInit(): void {
    this.AR.params.subscribe((param: any) => {
      this.Flatusers(param.id) 
    })

  }
  Flatusers(id: string) {
    this.loginService.getFlatusers(id).subscribe((res: any) => {
      this.getallFlatusers = res.response;
      console.log(this.getallFlatusers);
    });
  }
    
    
  }
  

