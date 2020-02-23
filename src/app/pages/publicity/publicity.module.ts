import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicityRoutingModule } from './publicity-routing.module';
import { PublicityComponent } from './publicity.component';


@NgModule({
  declarations: [PublicityComponent],
  imports: [
    CommonModule,
    PublicityRoutingModule
  ]
})
export class PublicityModule { }
