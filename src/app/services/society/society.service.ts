import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {
  CityModel,
  PincodeNumber,
  SocietyModel,
  createManager,
  managerBankDetail,
  Role,
  state,
} from '../../models/society.model';
@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  get(arg0: string, arg1: { responseType: string; }) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  private readonly basePath = 'http://157.245.105.135:8080/apt/'; //[BASEPATH]

  private readonly SocietyPath = 'dashboard/getallsociety'; 
  token = localStorage.getItem('token') || null;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    X_ACCESS_TOKEN: `Bearer ${
      this.token ? JSON.parse(localStorage.getItem('token') || '') : null
    }`,
  });

  options = { headers: this.headers };

  getSociety() {
    return this.http.get(`${this.basePath}${this.SocietyPath}`, this.options);
  }
}
