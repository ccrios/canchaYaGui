import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { DemoModule } from 'src/app/components/demo/demo-module.module';
import { DemoComponent } from 'src/app/components/demo/demo-module.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BootstrapModule } from './bootstrap.module';

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

// platformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {
//   // Ensure Angular destroys itself on hot reloads.
//   if (window['ngRef']) {
//     window['ngRef'].destroy();
//   }
//   window['ngRef'] = ref;

//   // Otherwise, log the boot error
// }).catch(err => console.error(err));