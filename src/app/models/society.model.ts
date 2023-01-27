import { EditraisedComplaintComponent } from './../editraised-complaint/editraised-complaint.component';
export interface SocietyModel {
  readonly societyname: string | null;
  readonly pincodeModel: PincodeModel;
}

export interface PincodeModel {
  readonly pincodeId: number | null;
}

export interface CityModel {
  readonly cityname: string | null;
  readonly stateEntity: stateEntity;
}
export interface stateEntity {
  readonly stateid: number | null;
}

export interface PincodeNumber {
  readonly pincodeNumber: number;
  readonly cityEntity: cityEntity;
}
export interface cityEntity {
  readonly cityid: number;
}

export interface createManager {
  readonly fullname: string | null;

  readonly email: string | null;

  readonly mobile: string | null;

  readonly address: string | null;

  readonly password: string | null;

  readonly roleId: string | null;

  readonly societyId: string | null;

  readonly bloodGroup: string | null;

  readonly emergencyContactNumber: string | null;

  readonly emergencyContactName: string | null;

  readonly relationshipStatus: string | null;
}

export interface managerBankDetail {
  readonly bankName: String;

  readonly bankAccountName: string;

  readonly bankAccountNumber: number;

  readonly iFSCCode: string;

  readonly bankBranch: string;

  readonly societyManagerId: number;
}

export interface Role {
  readonly rolename: string;

  readonly roleCode: number;
}
export interface state {
  readonly statename: string;
}

export interface FpverifyEmail {
  readonly email: String;

}


export interface fpverifyOtp {
  readonly email: any;
  readonly otpCode: number;
}

export interface addvisitor{
  
  readonly visitorTypeName:String;
}

export interface  resetPassword{

  readonly email: any;

readonly newPassword : string;
}

export interface RaisedCategory{

  readonly raiseCategoryName : string;
}

export interface EditraisedCategory{

   readonly raiseCategoryName :string;
}

export interface AddDailyHelpers{

  readonly categoryTypeName :string;
}


