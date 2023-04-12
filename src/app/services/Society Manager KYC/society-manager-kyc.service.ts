import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocietyManagerKycService {

  get(arg0: string, arg1: { responseType: string; }) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
    //manimegala server : http://192.168.1.157:8080/       admin/login


  private readonly basePath = 'http://157.245.105.135:8080/apt/'; //[BASEPATH]

  private readonly SocManagerKyc = 'managerkyc/getViewDocument/1/1';
  
  token = localStorage.getItem('token') || null;

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    X_ACCESS_TOKEN: `Bearer ${
      this.token ? JSON.parse(localStorage.getItem('token') || '') : null
    }`,
  });

  options = { headers: this.headers };

  image() {
    return this.http.get(`${this.basePath}${this.SocManagerKyc}`, {
      ...this.options,
      ...{ responseType: 'blob' },
    });
  }

}