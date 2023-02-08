import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocietyUploadLogoService {


constructor(private http: HttpClient) {}

private readonly basePath = 'http://192.168.1.157:8080/'; //[BASEPATH]


private readonly  updateImagepath= 'SearchSociety/uploadlogo'

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
    `${this.basePath}${this.updateImagepath}`,
    formData,
    this.options
  );
}


public updateImage(formData: any) {
 

return this.http.put(
  `${this.basePath}${this.updateImagepath}`,
  formData,
  this.options
);
}

}
