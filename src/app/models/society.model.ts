import { ImagePromotionService } from './../services/promition service/image-promotion.service';
import { EditraisedComplaintComponent } from './../editraised-complaint/editraised-complaint.component';
export interface SocietyModel {
  readonly societyname: string | null;
  readonly maintenanceCharges: String;
  readonly address: string;
  readonly mobileNumber: string;

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

  readonly hospitalName: string | null;
  
  readonly hospitalNumber: string | null;
}
export interface EditManager {

  readonly fullName: string | null;

  readonly email: string | null;

  readonly mobile: string | null;

  readonly address: string | null;

  readonly password: string | null;

  readonly roleId: string | null;

  readonly modifiedBy: string | null;

  readonly bloodGroup: string | null;

  readonly emergencyContactNumber: string | null;

  readonly emergencyContactName: string | null;

  readonly relationshipStatus: string | null;

  readonly hospitalName: string | null;
  
  readonly hospitalNumber: string | null;


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

export interface addvisitor {
  readonly visitorTypeName: String;
}

export interface resetPassword {
  readonly email: any;

  readonly newPassword: string;
}

export interface RaisedCategory {
  readonly raiseCategoryName: string;
}

export interface EditraisedCategory {
  readonly raiseCategoryName: string;
}

export interface AddDailyHelpers {
  readonly categoryTypeName: string;
}

export interface ChangePassword {
  readonly password: string;

  readonly newPassword: string;
}

export interface ImagePromotion {
  readonly startDate: any;
  readonly validDate: any;
  readonly createdBy: string;
  readonly userId: string;
  readonly status: string;
}

export interface editVisitorCategory {
  readonly visitorTypeName: string;
}
export interface UpdateSociety {}

export interface CreateProfile {
  
  readonly fullname: string;

  readonly address: string;

  readonly email: string;

  readonly mobile: string;

  readonly password: string;

  readonly roleId: string;

  readonly ipaddress: string;

  readonly firebaseId: string;

  readonly deviceName: String;

  readonly deviceNumber: string;

  readonly deviceType: string;

  readonly deviceModel: string;
}
export interface Settlement {
  
  readonly settlementUTRNumber: string;

  readonly settlementDateTime: any;

  readonly settlementStatus: string;

  readonly settlementReason: any;
}
export interface UpdateUser{

  readonly userStatus  :number |boolean;
}

export interface ManagerApprove{

  readonly approvalStatus :string;
  readonly approvalBy :string;
}

export interface Charges{

  readonly greenPageAmount : string;
  readonly gstPercentage : string;
  readonly sgstPercentage : string;
  readonly igstPercentage : string;
  readonly courierCharge : string;
  readonly otherCharge : string;
  readonly createdBy : string;
  readonly societyId : string;

}export interface EditCharges{

  readonly greenPageAmount : string;
  readonly gstPercentage : string;
  readonly sgstPercentage : string;
  readonly igstPercentage : string;
  readonly courierCharge : string;
  readonly otherCharge : string;
  readonly modifiedBy : string;

}
export interface AddStampPaper{
  readonly stampSizePaperAmount :String;
  readonly createdBy :String;

}
export interface EditStampPaper{
  readonly stampSizePaperAmount :String;
  readonly modifiedBy :String;
}

export interface UserbankStatus{
  bankStatus:string;
}

export interface EditDailyHelpers{
  readonly categoryTypeName :string;
  readonly modifiedy: string;
}

export interface AddVistorsType{
 
  readonly visitorTypeName :string;
 readonly  createdBy :string;
}