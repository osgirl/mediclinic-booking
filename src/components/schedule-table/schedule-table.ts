import { Component } from '@angular/core';

@Component({
  selector: 'schedule-table',
  templateUrl: 'schedule-table.html'
})
export class ScheduleTableComponent {

  constructor() {
  }

  back(event: Event){
    event.stopPropagation();
  }
  forward(event: Event){
    event.stopPropagation();
  }

}
