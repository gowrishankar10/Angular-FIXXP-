// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ImagePromotionService {

//   get(arg0: string, arg1: { responseType: string; }) {
//     throw new Error('Method not implemented.');
//   }
//   constructor(private http: HttpClient) { }

// private readonly basePath = 'http://157.245.105.135:8080/apt/'; //[BASEPATH]

//   private readonly imagepath = 'promotions/updateads';  
  
  
//   token = localStorage.getItem('token') || null;

//   headers = new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     X_ACCESS_TOKEN: `Bearer ${
//       this.token ? JSON.parse(localStorage.getItem('token') || '') : null
//     }`,
//   });

//   options = { headers: this.headers };


 
//   public uploadImage(image: File): Observable<Response> {
    
//     const formData = new FormData();

//     formData.append('image', image);

//     return this.http.post(`${this.basePath}${this.imagepath}`,formData,this.options);
//   }
// }


