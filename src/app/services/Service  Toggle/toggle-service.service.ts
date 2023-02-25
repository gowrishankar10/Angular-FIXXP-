import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleServiceService {

  get(arg0: string, arg1: { responseType: string; }) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  private readonly basePath = ' http://157.245.105.135:8080/apt/'; //[BASEPATH]

  private readonly ActiveInActive = 'createprofile/activestatus/'; 
  
  token = localStorage.getItem('token') || null;

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    X_ACCESS_TOKEN: `Bearer ${
      this.token ? JSON.parse(localStorage.getItem('token') || '') : null
    }`,
  });

  options = { headers: this.headers };

  ActiveInActives() { 
    return this.http.get(`${this.basePath}${this.ActiveInActive}`, {
      ...this.options,
      ...{ responseType: 'blob' },
    });
  }

}