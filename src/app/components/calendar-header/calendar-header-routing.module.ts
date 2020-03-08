import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarHeaderComponent } from './calendar-header.component';


const routes: Routes = [
  {
    path: '',
    component: CalendarHeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarHeaderRoutingModule { }
