import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
    selector: 'mwl-demo-utils-calendar-header',
    templateUrl: './demo-utils-module.component.html'
})
export class CalendarHeaderComponent {
    @Input() view: CalendarView | 'month' | 'week' | 'day';

    @Input() viewDate: Date;

    @Input() locale: string = 'en';

    @Output() viewChange: EventEmitter<string> = new EventEmitter();

    @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
}
