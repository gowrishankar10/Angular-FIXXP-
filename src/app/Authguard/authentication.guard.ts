import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,  } from '@angular/router';
import { LoginService } from '../services/Login Service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private login: LoginService,private route:Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

      if(this.login.token) {

        return true;
        
      }
      this.route.navigateByUrl('adminlogin');

      return false;
    
  }
  
}
