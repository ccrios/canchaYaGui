import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { DemoModule } from 'src/app/components/demo/demo-module.module';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    DemoModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
