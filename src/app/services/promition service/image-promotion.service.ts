import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagePromotionService {
  constructor(private http: HttpClient) {}

  private readonly basePath = 'http://157.245.105.135:8080/apt/'; //[BASEPATH]

  private readonly imagepath = 'promotions/postads';

  token = localStorage.getItem('token') || null;

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    X_ACCESS_TOKEN: `Bearer ${
      this.token ? JSON.parse(localStorage.getItem('token') || '') : null
    }`,
  });

  options = { headers: this.headers };

  public uploadImage(formData: any) {
   

    return this.http.post(
      `${this.basePath}${this.imagepath}`,
      formData,
      this.options
    );
  }
}
