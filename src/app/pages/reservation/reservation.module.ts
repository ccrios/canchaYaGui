import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation.component';
import { ScheduleComponent } from '../schedule/schedule.component';


@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ],
  exports: [ScheduleComponent]
})
export class ReservationModule { }
