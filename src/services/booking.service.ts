import { Injectable } from "@angular/core";
import { Appointment, Address, Doctor } from "../models/interface";

@Injectable()
export class BookingService {
    getAppointmentList(){
        return this.appointments;
    }
    doctors: Doctor[] = [
        {
            avatar: 'http://i.pravatar.cc/300',
            name: 'Dr Gilles DEMOLON',
            speciality: 'Chirurgien-dentiste'
        },
        {
            avatar: 'http://i.pravatar.cc/300',
            name: 'Dr Gilles ELHARRAR',
            speciality: 'Chirurgien-dentiste'
        }
    ];
    addresses: Address[] = [
        {
            line1:'Example str 5',
            city: 'Budapest',
            index: '1000',
            coordinate: {lat:47.4979,lng:19.0402}
        },
        {
            line1:'Example2 str 5',
            city: 'Paris',
            index: '1011',
            coordinate: {lat:48.8566,lng:2.3522}
        }
    ];
    appointments:Appointment[] = [
        {
            address: this.addresses[0],
            doctor: this.doctors[0],
            time: new Date().getTime() + 86400000
        },
        {
            address: this.addresses[1],
            doctor: this.doctors[1],
            time: new Date().getTime() + 86600000
        },
        {
            address: this.addresses[0],
            doctor: this.doctors[0],
            time: new Date().getTime() + 86800000
        }
    ];
}