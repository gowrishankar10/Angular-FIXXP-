import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServicesService {

  constructor() { }
  getToken(){
    return !!localStorage.getItem('token');
  }
}
