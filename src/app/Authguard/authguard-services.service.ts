import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServicesService {

  getToken(){
    return !!localStorage.getItem('token');
  }
}
