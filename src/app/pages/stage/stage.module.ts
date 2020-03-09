import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageRoutingModule } from './stage-routing.module';
import { StageComponent } from './stage.component';
import { ListStagesModule } from 'src/app/components/list-stages/list-stages.module';


@NgModule({
  declarations: [StageComponent],
  imports: [
    CommonModule,
    StageRoutingModule,
    ListStagesModule
  ]
})
export class StageModule { }
