import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarHeaderRoutingModule } from './calendar-header-routing.module';
import { CalendarHeaderComponent } from './calendar-header.component';


@NgModule({
  declarations: [CalendarHeaderComponent],
  imports: [
    CommonModule,
    CalendarHeaderRoutingModule
  ],
  exports: [
    CalendarHeaderComponent
  ]
})
export class CalendarHeaderModule { }
