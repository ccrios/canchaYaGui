import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { colors } from './colors';

@Component({
  selector: 'app-mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html'
})
export class DemoComponent {
  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Draggable event',
      color: colors.yellow,
      start: new Date(),
      draggable: true
    },
    {
      title: 'A non draggable event',
      color: colors.blue,
      start: new Date()
    },
    {
      title: 'Draggable event 1',
      color: colors.yellow,
      start: new Date("2020-05-03"),
      draggable: true
    },
    {
      title: 'A non draggable event 1',
      color: colors.blue,
      start: new Date("2020-02-03")
    }
  ];

  refresh: Subject<any> = new Subject();

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
}
