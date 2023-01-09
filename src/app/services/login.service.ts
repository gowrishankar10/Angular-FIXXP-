import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CityModel, PincodeNumber, SocietyModel, createManager } from '../models/society.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) { }

  //manimegala server : http://192.168.1.157:8080/       admin/login
  //cloud server :     http://157.245.105.135:8080/apt/  admin/login

  private readonly basePath = 'http://157.245.105.135:8080/apt/';             //[BASEPATH]

  private readonly loginPatah = 'admin/login';                                 //[LOGIN]

  private readonly dashboardPath = 'dashboard/dashboardcount';                    //[DASHBOARD COUNT]

  private readonly SocietyPath = 'dashboard/getallsociety';                     //[ALL SOCIETY]

  private readonly blockIdPath = 'dashboard/getBlock/';                         //[BLOCK BY ID]             //[TICKETS]

  private readonly FlatsPath = 'dashboard/getFlat/';                          //[FLATS BY ID]

  private readonly FlatUsersPath = 'addFlat/getFlatuser/';

  private readonly ProfilePath = 'admin/adminviewprofile/';                     //[DASHBOARD PROFILE]

  private readonly TicketsPath = 'dashboard/getalltickets';                      //[FLAT USERS]

  private readonly UserManagemetPath = 'adminusermanagement/getallusers';            //[USER MANAGEMENT]

  private readonly UserManagemetIdPath = 'adminusermanagement/getUserId/';             //[USERMANAGEMENT ID]

  private readonly AllTransactionPath = 'transactionHistory/getalltransactions';     //[TRANSACTION HISTORY]

  private readonly AllTransactionchartPath = 'dashboard/transactionchart/2022 ';          //[TRANSACTION CHART]

  private readonly AllStatePath = 'state/getall';                             //[ALL STATE ]

  private readonly AllCityPath = 'city/getall';                           //[CITY]

  private readonly AllpincodePath = 'pincode/getPincode/';                     //[PINCODE]

  private readonly addSocietyPath = 'SearchSociety/add';                       //[ADD SOCIETY]

  private readonly addCityPath = 'city/add';                                //[ADD City]

  private readonly allStateIdPath = 'state/';                                     //[ADD STATE ID]

  private readonly allcityIdPath = 'city/getCity/';                                    //[ADD City]

  private readonly allPincodeIdPath = 'pincode/add';                                //[ADD PINCODE ID]

  private readonly DeleteSocietyPath = 'SearchSociety/deletesociety/';                                //[ADD PINCODE ID]

  private readonly AllManagerPath = 'societylogin/getallsocietymanager';

  private readonly createManager = 'societylogin/create';

  private readonly editSocietyPath = 'SearchSociety/';

  private readonly showCountById = 'dashboard/getsocietycount/'

  private readonly UploadPhotoPath  = 'createprofile/uploadphoto';

  private readonly  viewProfilePicPath ='createprofile/viewprofilephoto/';
  



  loginError = new Subject();


  token = localStorage.getItem('token');

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    X_ACCESS_TOKEN: `Bearer ${this.token ? JSON.parse(localStorage.getItem('token') || '') : null}`,
  });


  options = { headers: this.headers };

  login(email: string, password: string) {
    const credentialBody = {
      email: email,
      password: password,
    };
    return this.http.post(`${this.basePath}${this.loginPatah}`, credentialBody).subscribe((res: any) => {
      if (res.message === 'Success') {
        localStorage.setItem(
          'token',
          JSON.stringify(res.jwtResponse.X_ACCESS_TOKEN)
        );
        this.router.navigateByUrl('dashboard');
        console.log(localStorage.getItem('token'));
      } else {
        this.loginError.next(res.message);
      }
    });
  }

  getAllSociety() {
    return this.http.get(`${this.basePath}${this.SocietyPath}`, this.options);
  }



  getdashboard() {
    return this.http.get(`${this.basePath}${this.dashboardPath}`, this.options);
  }



  getSociety() {
    return this.http.get(`${this.basePath}${this.SocietyPath}`, this.options);
  }



  getProfile(id: string) {
    return this.http.get(`${this.basePath}${this.ProfilePath}${id}`, this.options);
  }



  blockId(id: string) {
    return this.http.get(`${this.basePath}${this.blockIdPath}${id}`, this.options);
  }



  GetTickets() {
    return this.http.get(`${this.basePath}${this.TicketsPath}`, this.options);
  }



  getFlats(id: string) {
    return this.http.get(`${this.basePath}${this.FlatsPath}${id}`, this.options);
  }


  getFlatusers(id: string) {
    return this.http.get(`${this.basePath}${this.FlatUsersPath}${id}`, this.options);
  }


  getUserManagement() {
    return this.http.get(`${this.basePath}${this.UserManagemetPath}`, this.options);
  }


  getUserManagementId(id: string) {
    return this.http.get(`${this.basePath}${this.UserManagemetIdPath}${id}`, this.options);
  }

  getAllTransaction() {
    return this.http.get(`${this.basePath}${this.AllTransactionPath}`, this.options);
  }


  getAllTransactionchart() {
    return this.http.get(`${this.basePath}${this.AllTransactionchartPath}`, this.options);
  }

  getallstateid(id: number) {
    return this.http.get(`${this.basePath}${this.allStateIdPath}${id}`, this.options);
  }
  getallstate() {
    return this.http.get(`${this.basePath}${this.AllStatePath}`, this.options);
  }

  getallcityid(id: string | null) {
    return this.http.get(`${this.basePath}${this.allcityIdPath}${id}`, this.options);
  }
  getallcity() {
    return this.http.get(`${this.basePath}${this.AllCityPath}`, this.options);
  }

  getpincode(id: string | null) {
    return this.http.get(`${this.basePath}${this.AllpincodePath}${id}`, this.options);
  }

  addSociety(model: SocietyModel) {
    return this.http.post(`${this.basePath}${this.addSocietyPath}`, model, this.options)
  }

  editSociety(id: number, model: SocietyModel) {
    return this.http.put(`${this.basePath}${this.editSocietyPath}${id}`, model, this.options)
  }

  addCity(model: CityModel) {
    return this.http.post(`${this.basePath}${this.addCityPath}`, model, this.options);
  }

  addpincode(model: PincodeNumber) {
    return this.http.post(`${this.basePath}${this.allPincodeIdPath}`, model, this.options)
  }

  deleteSociety(id: string) {
    return this.http.delete(`${this.basePath}${this.DeleteSocietyPath}${id}`, this.options)
  }

  allManagerPath() {
    return this.http.get(`${this.basePath}${this.AllManagerPath}`, this.options)
  }


  createManagerDetails(model: createManager) {
    return this.http.post(`${this.basePath}${this.createManager}`, model, this.options);
  }

  CountById(id: string) {
    return this.http.get(`${this.basePath}${this.showCountById}${id}`, this.options)
  }
  uploadPhoto()
  
  {
    return this.http.post('${this.basePath}${this.UploadPhotoPath}',this.options)
  }

  viewProfilePicture(id: string) {
    return this.http.get(`${this.basePath}${this.viewProfilePicPath}${id}`, this.options);
  }

}


