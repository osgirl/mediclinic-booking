import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentListPage } from './appointment-list';
import { AgmCoreModule } from '@agm/core';
import { ComponentsModule } from '../../components/components.module';

const GMAP_API_KEY = "AIzaSyB66G40FPlogWz1CHIvRga8HGyd7CmKKDM";


@NgModule({
  declarations: [
    AppointmentListPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentListPage),
    AgmCoreModule.forRoot({
      apiKey: GMAP_API_KEY
    }),
    ComponentsModule
  ],
})
export class AppointmentListPageModule {}
