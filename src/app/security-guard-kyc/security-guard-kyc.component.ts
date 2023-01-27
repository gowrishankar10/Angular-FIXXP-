import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-security-guard-kyc',
  templateUrl: './security-guard-kyc.component.html',
  styleUrls: ['./security-guard-kyc.component.css']
})
export class SecurityGuardKycComponent {


  constructor(
    private loginService: LoginService,
    private route: Router,
    private AR: ActivatedRoute
  ) {}
  
  kycDetail:any;

  ngOnInit(): void {

  }

}
