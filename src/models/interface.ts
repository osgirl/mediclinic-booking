export interface Appointment {
    doctor: Doctor;
    address: Address;
    time:number;
}

export interface Doctor {
    avatar:string;
    name: string;
    speciality: string;
}

export interface Address {
    line1:string;
    line2?:string;
    index:string;
    city:string;
    coordinate:Coordinate
}

export interface Coordinate {
    lat:number;
    lng:number;
}