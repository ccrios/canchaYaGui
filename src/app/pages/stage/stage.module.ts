import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageRoutingModule } from './stage-routing.module';
import { StageComponent } from './stage.component';


@NgModule({
  declarations: [StageComponent],
  imports: [
    CommonModule,
    StageRoutingModule
  ]
})
export class StageModule { }
