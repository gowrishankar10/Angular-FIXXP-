export interface SocietyModel {
    readonly societyname: string | null;
    readonly pincodeModel: PincodeModel

}

export interface PincodeModel {
    readonly pincodeId: number | null;
}


export interface CityModel {
    readonly cityname: string |null;
    readonly stateEntity: stateEntity;
}
export interface stateEntity {
    readonly stateid: number  |null;

}

export interface PincodeNumber {

    readonly pincodeNumber: number;
    readonly cityEntity: cityEntity;
}
export interface cityEntity {
    readonly cityid: number;
}



export interface createManager {

    readonly fullname: string;

    readonly email: string;

    readonly mobile: string;
    
    readonly address: string;

    readonly password: string;

    readonly roleId: string;

    readonly societyId: string;



}