import {
  AddStampPaper,
  AddVistorsType,
  Charges,
  CreateProfile,
  EditCharges,
  EditDailyHelpers,
  EditManager,
  EditStampPaper,
  ManagerApprove,
  PincodeModel,
  Settlement,
  UpdateUser,
} from './../../models/society.model';
import { NgLocalization } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  CityModel,
  PincodeNumber,
  SocietyModel,
  createManager,
  managerBankDetail,
  Role,
  state,
  FpverifyEmail,
  fpverifyOtp,
  addvisitor,
  resetPassword,
  RaisedCategory,
  EditraisedCategory,
  AddDailyHelpers,
  ChangePassword,
  editVisitorCategory,
} from '../../models/society.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  //manimegala server : http://192.168.1.157:8080/       admin/login
  //cloud server :     http://157.245.105.135:8080/apt/  admin/login

  // private readonly basePath = 'http://192.168.1.157:8080/'; //[BASEPATH]

  private readonly basePath = 'http://157.245.105.135:8080/apt/'; //[BASEPATH]

  private readonly loginPatah = 'admin/login'; //[LOGIN]

  private readonly dashboardPath = 'dashboard/dashboardcount'; //[DASHBOARD COUNT]

  private readonly SocietyPath = 'dashboard/getallsociety'; //[ALL SOCIETY]

  private readonly blockIdPath = 'dashboard/getBlock/'; //[BLOCK BY ID]             //[TICKETS]

  private readonly FlatsPath = 'dashboard/getFlat/'; //[FLATS BY ID]

  private readonly FlatUsersPath = 'addFlat/getFlatuser/';

  private readonly ProfilePath = 'admin/adminviewprofile/'; //[DASHBOARD PROFILE]

  private readonly TicketsPath = 'dashboard/getalltickets'; //[FLAT USERS]

  private readonly UserManagemetPath = 'adminusermanagement/getallusers'; //[USER MANAGEMENT]

  private readonly UserManagemetIdPath = 'adminusermanagement/getUserId/'; //[USERMANAGEMENT ID]

  private readonly AllTransactionPath = 'transactionHistory/getalltransactions'; //[TRANSACTION HISTORY]

  private readonly AllTransactionchartPath = 'dashboard/transactionchart/2023'; //[TRANSACTION CHART]

  private readonly AllStatePath = 'state/getall'; //[ALL STATE ]

  private readonly AllCityPath = 'city/getallcity'; //[CITY]

  private readonly AllpincodePath = 'pincode/getPincode/'; //[PINCODE]

  private readonly addSocietyPath = 'SearchSociety/add'; //[ADD SOCIETY]

  private readonly addCityPath = 'city/add'; //[ADD City]F

  private readonly allStateIdPath = 'state/'; //[ADD STATE ID]

  private readonly allcityIdPath = 'city/getCity/'; //[ADD City]

  private readonly allPincodeIdPath = 'pincode/add'; //[ADD PINCODE ID]

  private readonly DeleteSocietyPath = 'SearchSociety/deletesociety/'; //[ADD PINCODE ID]

  private readonly AllManagerPath = 'societylogin/getallsocietymanager';

  private readonly editManagerPath = 'societylogin/update/';

  private readonly createManager = 'societylogin/create';

  private readonly editSocietyPath = 'SearchSociety/updatesociety/';

  private readonly showCountById = 'dashboard/getsocietycount/';

  private readonly UploadPhotoPath = 'createprofile/uploadphoto';

  private readonly viewProfilePicPath = 'createprofile/viewprofilephoto/';

  private readonly allManagerBankDetailId = 'managerbankdetails/getmanager/';

  private readonly allAddManagerBankPath = 'managerbankdetails/addbankdetails';

  private readonly allSocietyManagerId = 'societylogin/viewprofile/';

  private readonly allRolePath = 'role/getall';

  private readonly addRole = 'role/add';

  private readonly addState = 'state/add';

  private readonly societyVisitors = 'visitors/getAllVisitorsNotification/';

  private readonly viewBankDetail = 'managerbankdetails/getmanager/';

  private readonly societyEmergencyContact = 'emergencycontact/getEmergency/';

  private readonly societyBasedDailyWorkers =
    'workerscategory/getWorkersSociety/';

  private readonly societyTicketWorkers =
    'ticketworker/getticketworkers/societybased/';

  private readonly allSocietySecurityGurds =
    'societymanagerdashboard/getSecurity/';

  private readonly viewWorkers = 'workerscategory/';

  private readonly dailyWorkersKYC = 'dailyhelpworkerskyc/getkycdocuments/';

  private readonly addVisitor = 'visitortypedropdown/addvisitortypedropdown/';

  private readonly FPVerify = 'adminforgotpassword/verifyemail';

  private readonly FPVerifyOtp = 'adminforgotpassword/verifyotp';

  private readonly CategoryVisitors =
    'visitortypedropdown/getallvisitortypedropdown';

  private readonly deleteVisitorCategory =
    'visitortypedropdown/deletevisitortypedropdown/';

  private readonly editVisitorCategory =
    'visitortypedropdown/updatevisitortypedropdown/';

  private readonly changePassword = 'adminchangepassword/view/';

  private readonly AllProfile = 'createprofile/getall';

  private readonly resetPassword = 'adminforgotpassword/reset';

  private readonly ViewDailyWorkersKycs =
    'dailyhelpworkerskyc/getViewDocument/1/';

  private readonly allRaisedCategory = 'raiseComplaintCategory/getall';

  private readonly addRaisedCategorys = 'raiseComplaintCategory/add';

  private readonly editRaisedCategory = 'raiseComplaintCategory/update/';

  private readonly dailyheperCategory = 'category/getall';

  private readonly addDailyHelper = 'category/add';

  private readonly adminProfileByid = 'createprofile/viewprofile/';

  private readonly viewTIckectWorkers = 'ticketworker/';

  private readonly viewSocietyWorkers = 'security/viewsecurityprofile/';

  private readonly viewdailyworkersKyc = 'dailyhelpworkerskyc/getkycdocuments/';

  private readonly viewTicketWorkersKyc =
    'ticketworkerkycdocument/getkycdocument/';

  private readonly viewSecurityGuardKyc = 'securitykycdoc/getkycsecurity/';

  private readonly viewpromotions = 'promotions/updateads';

  private readonly AdminChangePassword = 'adminchangepassword/view/';

  private readonly ViewUserKyc = 'addhomedocument/GetDocument';

  private readonly editCity = 'city/update/';

  private readonly editPincode = 'pincode/update/';

  private readonly EditState = 'state/';

  private readonly editrRole = 'role/update/';

  private readonly ResendOtp = 'createprofile/resendotp/';

  private readonly DeletePincode = 'pincode/';

  private readonly DueAmount = 'dueamount/getall';

  private readonly ViewDueAmount = 'dueamount/getaddflat/';

  private readonly CreateProfile = 'createprofile/create';

  private readonly EditProfile = 'createprofile/update/';

  private readonly Invoice = 'transactionHistory/viewreceipt/';

  private readonly SettlementUpdate = 'transactionHistory/updatesettlement/';

  private readonly WorkerTransaction = 'workertransactionhistory/getall';

  private readonly viewWorkerTransaction =
    'workertransactionhistory/getusertransaction/';

  private readonly AllAdmin = 'admin/getalladmin/2';

  private readonly UserActive = 'createprofile/activestatus/';

  private readonly SocManagerKyc = 'managerkyc/getkycmanager/';

  private readonly ManagerApprove = 'managerkyc/updateapprovalstatus/';

  private readonly allrentpay = 'rentpaytransaction/getall';

  private readonly Charges = 'charges/addcharges';

  private readonly AllCharges = 'charges/getallcharges';

  private readonly EditCharges = 'charges/update/';

  private readonly DeleteCharges = 'charges/delete/';

  private readonly AllStampPaper = 'stamppaper/getall';

  private readonly AddStampPaper = 'stamppaper/add';

  private readonly EditStampPaper = 'stamppaper/update/';

  private readonly DeleteStampPaper = 'stamppaper/delete/';

  private readonly UserBankDetails = 'userbankdetails/getuserbank/';

  private readonly UserKycView = 'addhomedocument/GetDocument/';

  private readonly editDailyHelper = 'category/update/';

  private readonly getallvisitorstype ='visitortypedropdown/getallvisitortypedropdown';

  private readonly addvisitorstype ='visitortypedropdown/addvisitortypedropdown';

  private readonly DeleteCity ='city/';

  loginError = new Subject();

  token = localStorage.getItem('token') || null;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    X_ACCESS_TOKEN: `Bearer ${
      this.token ? JSON.parse(localStorage.getItem('token') || '') : null
    }`,
  });

  options = { headers: this.headers };

  login(email: string, password: string) {
    const credentialBody = {
      email: email,
      password: password,
    };
    return this.http
      .post(`${this.basePath}${this.loginPatah}`, credentialBody)
      .subscribe((res: any) => {
        if (res.message === 'Success') {
          localStorage.setItem(
            'token',
            JSON.stringify(res.jwtResponse.X_ACCESS_TOKEN)
          );
          localStorage.setItem('id', JSON.stringify(res.profileid));
          localStorage.setItem('name', JSON.stringify(res.fullname));
          localStorage.setItem('lastLogedon', JSON.stringify(res.lastLoggedOn));
          location.href = 'dashboard';
          console.log(localStorage.getItem('token'));
          console.log(localStorage.getItem('id'));
          console.log(localStorage.getItem('lastLogedon'));
        } else {
          this.loginError.next(res.message);
        }
      });
  }

  CreateProfiles(model: CreateProfile) {
    return this.http.post(
      `${this.basePath}${this.CreateProfile}`,
      model,
      this.options
    );
  }
   EditProfiles(id :string,model: CreateProfile) {
    return this.http.post(
      `${this.basePath}${this.EditProfile}${id}`,
      model,
      this.options
    );
  }

  AddStampPapers(model: AddStampPaper) {
    return this.http.post(
      `${this.basePath}${this.AddStampPaper}`,
      model,
      this.options
    );
  }
  ResensOTP(id: string) {
    return this.http.get(
      `${this.basePath}${this.ResendOtp}${id}`,
      this.options
    );
  }
  editDailyHelpers(id: string,model: EditDailyHelpers) {
    return this.http.put(
      `${this.basePath}${this.editDailyHelper}${id}`,model,
      this.options
    );
  } 

  
   editManager(id : string ,model: EditManager) {
    return this.http.put(
      `${this.basePath}${this.editManagerPath}${id}`,model,
      this.options
    )
  }

  UserBankDetail(id: string) {
    return this.http.get(
      `${this.basePath}${this.UserBankDetails}${id}`,
      this.options
    );
  }
  SocietyManagerKyc(id: string) {
    return this.http.get(
      `${this.basePath}${this.SocManagerKyc}${id}`,
      this.options
    );
  }
  viewUserKYC(id: string, id1: string) {
    return this.http.get(
      `${this.basePath}${this.UserKycView}${id}/${id1}`,
      this.options
    );
  }
  ViewDueAmounts(id: string) {
    return this.http.get(
      `${this.basePath}${this.ViewDueAmount}${id}`,
      this.options
    );
  }
  ViewticketWorkers(id: string) {
    return this.http.get(
      `${this.basePath}${this.viewTIckectWorkers}${id}`,
      this.options
    );
  }

  ViewWorkerTransaction(id: string) {
    return this.http.get(
      `${this.basePath}${this.viewWorkerTransaction}${id}`,
      this.options
    );
  }

  DueAmounts() {
    return this.http.get(`${this.basePath}${this.DueAmount}`, this.options);
  } 
  allvisitortype() {
    return this.http.get(`${this.basePath}${this.getallvisitorstype}`, this.options);
  }
  AllStampPapers() {
    return this.http.get(`${this.basePath}${this.AllStampPaper}`, this.options);
  }
  allCharges() {
    return this.http.get(`${this.basePath}${this.AllCharges}`, this.options);
  }
  AllWorkerTransaction() {
    return this.http.get(
      `${this.basePath}${this.WorkerTransaction}`,
      this.options
    );
  }
  AllRentalpay() {
    return this.http.get(`${this.basePath}${this.allrentpay}`, this.options);
  }

  ChangePassword(id: string, model: ChangePassword) {
    return this.http.put(
      `${this.basePath}${this.AdminChangePassword}${id}`,
      model,
      this.options
    );
  }
  addvisitorsType( model: AddVistorsType) {
    return this.http.post(
      `${this.basePath}${this.addvisitorstype}`,
      model,
      this.options
    );
  }
  charges(model: Charges) {
    return this.http.post(
      `${this.basePath}${this.Charges}`,
      model,
      this.options
    );
  }
  ManagerApproves(id: string, model: ManagerApprove) {
    return this.http.put(
      `${this.basePath}${this.ManagerApprove}${id}`,
      model,
      this.options
    );
  }
  EditCharge(id: string, model: EditCharges) {
    return this.http.put(
      `${this.basePath}${this.EditCharges}${id}`,
      model,
      this.options
    );
  }
  EditStampPapers(id: string, model: EditStampPaper) {
    return this.http.put(
      `${this.basePath}${this.EditStampPaper}${id}`,
      model,
      this.options
    );
  }

  userActive(id: string, model: UpdateUser) {
    return this.http.put(
      `${this.basePath}${this.UserActive}${id}`,
      model,
      this.options
    );
  }

  Deletepincode(id: string) {
    return this.http.delete(
      `${this.basePath}${this.DeletePincode}${id}`,
      this.options
    );
  }
  deletecity(id: string) {
    return this.http.delete(
      `${this.basePath}${this.DeleteCity}${id}`,
      this.options
    );
  }
  DeletestampPaper(id: string) {
    return this.http.delete(
      `${this.basePath}${this.DeleteStampPaper}${id}`,
      this.options
    );
  }
  deleteCharge(id: string) {
    return this.http.delete(
      `${this.basePath}${this.DeleteCharges}${id}`,
      this.options
    );
  }
  viewUserKyc() {
    return this.http.get(`${this.basePath}${this.ViewUserKyc}`, this.options);
  }
  allAdmin() {
    return this.http.get(`${this.basePath}${this.AllAdmin}`, this.options);
  }

  EditRaisedCayegory(id: string, model: EditraisedCategory) {
    return this.http.put(
      `${this.basePath}${this.editRaisedCategory}${id}`,
      model,
      this.options
    );
  }

  SettlementUpdates(id: string, model: Settlement) {
    return this.http.put(
      `${this.basePath}${this.SettlementUpdate}${id}`,
      model,
      this.options
    );
  }

  getAllSociety() {
    return this.http.get(`${this.basePath}${this.SocietyPath}`, this.options);
  }
  workerTransactions() {
    return this.http.get(
      `${this.basePath}${this.WorkerTransaction}`,
      this.options
    );
  }

  image(id: string) {
    return this.http.get(`${this.basePath}${this.ViewDailyWorkersKycs}${id}`, {
      ...this.options,
      ...{ responseType: 'blob' },
    });
  }

  dailyhelperCategory() {
    return this.http.get(
      `${this.basePath}${this.dailyheperCategory}`,
      this.options
    );
  }

  getAllRaisedCategory() {
    return this.http.get(
      `${this.basePath}${this.allRaisedCategory}`,
      this.options
    );
  }

  CategoryVisitor() {
    return this.http.get(
      `${this.basePath}${this.CategoryVisitors}`,
      this.options
    );
  }

  getdashboard() {
    return this.http.get(`${this.basePath}${this.dashboardPath}`, this.options);
  }

  getSociety() {
    return this.http.get(`${this.basePath}${this.SocietyPath}`, this.options);
  }

  getProfile(id: string) {
    return this.http.get(
      `${this.basePath}${this.ProfilePath}${id}`,
      this.options
    );
  }

  GetAllProfile() {
    return this.http.get(`${this.basePath}${this.AllProfile}`, this.options);
  }

  blockId(id: string) {
    return this.http.get(
      `${this.basePath}${this.blockIdPath}${id}`,
      this.options
    );
  }

  viewdailyworkerKyc(id: string) {
    return this.http.get(
      `${this.basePath}${this.viewdailyworkersKyc}${id}`,
      this.options
    );
  }
  viewTicketworkerKyc(id: string) {
    return this.http.get(
      `${this.basePath}${this.viewTicketWorkersKyc}${id}`,
      this.options
    );
  }
  viewSecurityworkerKyc(id: string) {
    return this.http.get(
      `${this.basePath}${this.viewSecurityGuardKyc}${id}`,
      this.options
    );
  }

  GetTickets() {
    return this.http.get(`${this.basePath}${this.TicketsPath}`, this.options);
  }

  getFlats(id: string) {
    return this.http.get(
      `${this.basePath}${this.FlatsPath}${id}`,
      this.options
    );
  }
  adminprifileid(id: string) {
    return this.http.get(
      `${this.basePath}${this.adminProfileByid}${id}`,
      this.options
    );
  }
  getFlatusers(id: string) {
    return this.http.get(
      `${this.basePath}${this.FlatUsersPath}${id}`,
      this.options
    );
  }

  getUserManagement() {
    return this.http.get(
      `${this.basePath}${this.UserManagemetPath}`,
      this.options
    );
  }

  getUserManagementId(id: string) {
    return this.http.get(
      `${this.basePath}${this.UserManagemetIdPath}${id}`,
      this.options
    );
  }

  getAllTransaction() {
    return this.http.get(
      `${this.basePath}${this.AllTransactionPath}`,
      this.options
    );
  }

  getAllTransactionchart() {
    return this.http.get(
      `${this.basePath}${this.AllTransactionchartPath}`,
      this.options
    );
  }

  getallstateid(id: number) {
    return this.http.get(
      `${this.basePath}${this.allStateIdPath}${id}`,
      this.options
    );
  }
  getallstate() {
    return this.http.get(`${this.basePath}${this.AllStatePath}`, this.options);
  }

  getallcityid(id: number | null) {
    return this.http.get(
      `${this.basePath}${this.allcityIdPath}${id}`,
      this.options
    );
  }
  getallcity() {
    return this.http.get(`${this.basePath}${this.AllCityPath}`, this.options);
  }

  getpincode(id: string | null) {
    return this.http.get(
      `${this.basePath}${this.AllpincodePath}${id}`,
      this.options
    );
  }

  ResetPassword(model: resetPassword) {
    return this.http.post(
      `${this.basePath}${this.resetPassword}`,
      model,
      this.options
    );
  }
  addDailyHeplers(model: AddDailyHelpers) {
    return this.http.post(
      `${this.basePath}${this.addDailyHelper}`,
      model,
      this.options
    );
  }

  addRaisedCategory(model: RaisedCategory) {
    return this.http.post(
      `${this.basePath}${this.addRaisedCategorys}`,
      model,
      this.options
    );
  }
  addSociety(model: SocietyModel) {
    return this.http.post(
      `${this.basePath}${this.addSocietyPath}`,
      model,
      this.options
    );
  }

  viewPromotions() {
    return this.http.post(
      `${this.basePath}${this.addSocietyPath}`,
      FormData,
      this.options
    );
  }

  editSociety(id: number, model: SocietyModel) {
    return this.http.put(
      `${this.basePath}${this.editSocietyPath}${id}`,
      model,
      this.options
    );
  }
  editrole(id: number, model: Role) {
    return this.http.put(
      `${this.basePath}${this.editrRole}${id}`,
      model,
      this.options
    );
  }
  editcity(id: string, model: CityModel) {
    return this.http.put(
      `${this.basePath}${this.editCity}${id}`,
      model,
      this.options
    );
  }
  editpincode(id: string, model: PincodeNumber) {
    return this.http.put(
      `${this.basePath}${this.editPincode}${id}`,
      model,
      this.options
    );
  }

  editstate(id: string, model: state) {
    return this.http.put(
      `${this.basePath}${this.EditState}${id}`,
      model,
      this.options
    );
  }

  changepassword(id: number, model: SocietyModel) {
    return this.http.put(
      `${this.basePath}${this.editSocietyPath}${id}`,
      model,
      this.options
    );
  }
  editVisitorsCategory(id: string, model: editVisitorCategory) {
    return this.http.put(
      `${this.basePath}${this.editVisitorCategory}${id}`,
      model,
      this.options
    );
  }

  addCity(model: CityModel) {
    return this.http.post(
      `${this.basePath}${this.addCityPath}`,
      model,
      this.options
    );
  }

  addpincode(model: PincodeNumber) {
    return this.http.post(
      `${this.basePath}${this.allPincodeIdPath}`,
      model,
      this.options
    );
  }

  deleteSociety(id: string) {
    return this.http.delete(
      `${this.basePath}${this.DeleteSocietyPath}${id}`,
      this.options
    );
  }

  allManagerPath() {
    return this.http.get(
      `${this.basePath}${this.AllManagerPath}`,
      this.options
    );
  }

  createManagerDetails(model: createManager) {
    return this.http.post(
      `${this.basePath}${this.createManager}`,
      model,
      this.options
    );
  }

  CountById(id: string) {
    return this.http.get(
      `${this.basePath}${this.showCountById}${id}`,
      this.options
    );
  }
  uploadPhoto() {
    return this.http.post(
      '${this.basePath}${this.UploadPhotoPath}',
      this.options
    );
  }

  viewProfilePicture(id: string) {
    return this.http.get(
      `${this.basePath}${this.viewProfilePicPath}${id}`,
      this.options
    );
  }

  managrBankDetailId(id: string) {
    return this.http.get(
      `${this.basePath}${this.allManagerBankDetailId}${id}`,
      this.options
    );
  }

  addManagerBankDetail(model: managerBankDetail) {
    return this.http.post(
      `${this.basePath}${this.allAddManagerBankPath}`,
      model,
      this.options
    );
  }

  ManagerById(id: string) {
    return this.http.get(
      `${this.basePath}${this.allSocietyManagerId}${id}`,
      this.options
    );
  }

  allRole() {
    return this.http.get(`${this.basePath}${this.allRolePath}`, this.options);
  }

  addingRole(model: Role) {
    return this.http.post(
      `${this.basePath}${this.addRole}`,
      model,
      this.options
    );
  }

  addingState(model: state) {
    return this.http.post(
      `${this.basePath}${this.addState}`,
      model,
      this.options
    );
  }
  societyVisitor(id: string) {
    return this.http.get(
      `${this.basePath}${this.societyVisitors}${id}`,
      this.options
    );
  }

  societyEmergency(id: string) {
    return this.http.get(
      `${this.basePath}${this.societyEmergencyContact}${id}`,
      this.options
    );
  }

  societyDailyWokers(id: string) {
    return this.http.get(
      `${this.basePath}${this.societyBasedDailyWorkers}${id}`,
      this.options
    );
  }
  societyTicketWokers(id: string) {
    return this.http.get(
      `${this.basePath}${this.societyBasedDailyWorkers}${id}`,
      this.options
    );
  }
  societySecurityGuard(id: string) {
    return this.http.get(
      `${this.basePath}${this.allSocietySecurityGurds}${id}`,
      this.options
    );
  }

  viewbank(id: string) {
    return this.http.get(
      `${this.basePath}${this.viewBankDetail}${id}`,
      this.options
    );
  }
  viewWorkersDetailId(id: string) {
    return this.http.get(
      `${this.basePath}${this.viewWorkers}${id}`,
      this.options
    );
  }
  viewtTicketWorkersDetailId(id: string) {
    return this.http.get(
      `${this.basePath}${this.viewTIckectWorkers}${id}`,
      this.options
    );
  }
  viewtSecurityWorkersDetailId(id: string) {
    return this.http.get(
      `${this.basePath}${this.viewSocietyWorkers}${id}`,
      this.options
    );
  }

  FpVerifyEmail(model: FpverifyEmail) {
    return this.http.post(
      `${this.basePath}${this.FPVerify}`,
      model,
      this.options
    );
  }
  FpVerifyOtp(model: fpverifyOtp) {
    return this.http.post(
      `${this.basePath}${this.FPVerifyOtp}`,
      model,
      this.options
    );
  }

  addvisitors(model: addvisitor) {
    return this.http.post(
      `${this.basePath}${this.addVisitor}`,
      model,
      this.options
    );
  }

  deleteVisotorsCategory(id: string) {
    return this.http.delete(
      `${this.basePath}${this.deleteVisitorCategory}${id}`,
      this.options
    );
  }

  logout() {
    localStorage.removeItem('token');
    location.href = 'adminlogin';
  }
}
