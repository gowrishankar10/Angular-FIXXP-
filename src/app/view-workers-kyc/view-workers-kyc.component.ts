import { Component ,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-view-workers-kyc',
  templateUrl: './view-workers-kyc.component.html',
  styleUrls: ['./view-workers-kyc.component.css']
})
export class ViewWorkersKycComponent implements OnInit {

  constructor(private loginService: LoginService, private sanitizer: DomSanitizer,) {
    
  }

  ngOnInit(): void {
   
  }
}
