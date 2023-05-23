import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorsImagesService {

  
  get(arg0: string, arg1: { responseType: string; }) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

    //manimegala server : http://192.168.1.157:8080/       admin/login
  //cloud server :     http://157.245.105.135:8080/apt/  admin/login


  // private readonly basePath = 'http://192.168.1.157:8080/'; //[BASEPATH]
  //private readonly basePath = 'http://157.245.105.135:8080/apt/'; //[BASEPATH]
  private readonly basePath = 'http://157.245.105.135:8080/apt/'; //[BASEPATH]

  private readonly viewDoc = 'visitors/viewvisitorpicture/'; 
  
  token = localStorage.getItem('token') || null;

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    X_ACCESS_TOKEN: `Bearer ${
      this.token ? JSON.parse(localStorage.getItem('token') || '') : null
    }`,
  });

  options = { headers: this.headers };

  image(id:string) {
    return this.http.get(`${this.basePath}${this.viewDoc}${id}`, {
      ...this.options,
      ...{ responseType: 'blob' },
    });
  }

}
