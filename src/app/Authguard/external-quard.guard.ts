import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/Login Service/login.service';

@Injectable({
  providedIn: 'root',
})
export class ExternalGuard implements CanActivate {
  constructor(private login: LoginService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.login.token) {
      this.route.navigateByUrl('dashboard');
      return false;
    }

    return true;
  }
}
