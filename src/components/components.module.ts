import { NgModule } from '@angular/core';
import { ScheduleTableComponent } from './schedule-table/schedule-table';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ScheduleTableComponent],
	imports: [
		IonicModule
	],
	exports: [ScheduleTableComponent]
})
export class ComponentsModule {}
