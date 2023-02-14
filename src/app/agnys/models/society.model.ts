export interface SocietyModel { 
 readonly societyname: string | null;
 readonly pincodeModel: PincodeModel

}

export interface PincodeModel {
readonly pincodeId: number | null;
}