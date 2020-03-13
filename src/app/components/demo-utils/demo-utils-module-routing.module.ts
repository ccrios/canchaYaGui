import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarHeaderComponent } from './calendar-header.component';
import { DemoUtilsModule } from './demo-utils-module.module';

const routes: Routes = [
  {
    path: '',
    component: CalendarHeaderComponent

  }
];

@NgModule({
  imports: [DemoUtilsModule, RouterModule.forChild(routes)],
  exports: [RouterModule, CalendarHeaderComponent]
})
export class DemoUtilsModuleRoutingModule { }
