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
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    X_ACCESS_TOKEN: `Bearer ${
      this.token ? JSON.parse(localStorage.getItem('token') || '') : null
    }`,
  });

  options = { headers: this.headers };

  public uploadImage(image: File) {
    console.log(image)
    const formData = new FormData();
    const currenDate = new Date().toISOString();
    let d ='20-01-2023 16:46:00 PM';
    let d1 ='20-02-2023 16:46:00 PM';

    let effDate=new Date();
    console.log(effDate)
    let valDate=new Date(d1);


    formData.append('startDate', JSON.stringify(effDate.getTime()));
    formData.append('validDate', JSON.stringify(valDate.getTime()));
    formData.append('createdBy', 'Admin');
    formData.append('userId', '1');
    formData.append('status', '1');
    formData.append('bannerImage', image);

    return this.http.post(
      `${this.basePath}${this.imagepath}`,
      formData,
      this.options
    );
  }
}
