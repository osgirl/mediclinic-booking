import { Component, OnInit, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Appointment } from '../../models/interface';
import { BookingService } from '../../services/booking.service';

@IonicPage()
@Component({
  selector: 'page-appointment-list',
  templateUrl: 'appointment-list.html',
})
export class AppointmentListPage implements OnInit{

  appointments: Appointment[] = [];
  selectedAppointment: Appointment;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private bookingService: BookingService
    ) {
  }

  ngOnInit(){
    this.appointments = this.bookingService.getAppointmentList();
  }

  onSelectCard(appointment:Appointment){
    this.selectedAppointment = appointment;
  }

}
