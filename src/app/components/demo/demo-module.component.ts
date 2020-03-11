import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef
} from '@angular/core';
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView
} from 'angular-calendar';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OccupationService } from 'src/app/services/occupation.service';
import { AlertService } from 'ngx-alerts';

const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

@Component({
    selector: 'mwl-demo-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./demo-module.component.css'],
    templateUrl: 'demo-module.component.html'
})
export class DemoComponent {
    @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

    view: CalendarView = CalendarView.Month;

    CalendarView = CalendarView;

    viewDate: Date = new Date();

    modalData: {
        action: string;
        event: CalendarEvent;
    };

    actions: CalendarEventAction[] = [
        {
            label: '<i class="fa fa-fw fa-pencil"></i>',
            a11yLabel: 'Edit',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.handleEvent('Edited', event);
            }
        },
        {
            label: '<i class="fa fa-fw fa-times"></i>',
            a11yLabel: 'Delete',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.events = this.events.filter(iEvent => iEvent !== event);
                this.handleEvent('Deleted', event);
            }
        }
    ];

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[];
    // events: CalendarEvent[] = [
    //     {
    //         start: subDays(startOfDay(new Date()), 1),
    //         end: addDays(new Date(), 1),
    //         title: 'A 3 day event',
    //         color: colors.red,
    //         actions: this.actions,
    //         allDay: true,
    //         resizable: {
    //             beforeStart: true,
    //             afterEnd: true
    //         },
    //         draggable: true
    //     },
    //     {
    //         start: startOfDay(new Date()),
    //         title: 'An event with no end date',
    //         color: colors.yellow,
    //         actions: this.actions
    //     },
    //     {
    //         start: subDays(endOfMonth(new Date()), 3),
    //         end: addDays(endOfMonth(new Date()), 3),
    //         title: 'A long event that spans 2 months',
    //         color: colors.blue,
    //         allDay: true
    //     },
    //     {
    //         start: addHours(startOfDay(new Date()), 2),
    //         end: addHours(new Date(), 2),
    //         title: 'A draggable and resizable event',
    //         color: colors.yellow,
    //         actions: this.actions,
    //         resizable: {
    //             beforeStart: true,
    //             afterEnd: true
    //         },
    //         draggable: true
    //     }
    // ];

    activeDayIsOpen: boolean = false;


    id: any;
    occupationID;
    isCreating: boolean = false;
    isEditing: boolean = false;
    public occupationForm: FormGroup;
    constructor(private modal: NgbModal,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private occupationService: OccupationService,
        private alert: AlertService) {
        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            if (this.id !== undefined) {
                console.log(this.id);
                this.initForm();
            }
        });
        // this.createOccupation();
        this.listOccupations();
    }

    createOccupation() {
        this.occupationService.createOccupation(this.occupationForm.value).subscribe(res => {
            console.log('entre a crear');
            console.log(res);
            if (res['status']) {
                this.alert.success('Ocupación creada exitosamente!!!');
                // console.log(res);
            } else {
                this.alert.danger('Error al crear ocupación!!!');
            }
        });
    }

    public listOccupations() {
        console.log('se ejecuto');
        this.occupationService.listOccupations(this.id).subscribe(res => {
            if (res['status']) {
                const result = new Array();
                res['occupation'].forEach(element => {
                    result.push(this.buildOccupation(element));
                });
                console.log('result');
                console.log(result);
                this.events = result;
                this.refresh.next();
            }
        });
    }

    public buildOccupation(element): any {
        return {
            title: element.occupation_type,
            start: new Date(element.start),
            end: new Date(element.end),
            color: colors.blue,
            actions: this.actions,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        };
    }

    public deleteOccupation(idToDelete) {
        this.occupationService.listOccupations(idToDelete).subscribe(res => {
            if (res['status']) {
                console.log(res);
            }
        });
    }
s
    public updateOccupation(idToEdit) {
        this.occupationService.updateOccupation(idToEdit, this.occupationForm).subscribe(res => {
            if (res['status']) {
                console.log(res);
            }
        });
    }

    initForm() {
        this.occupationForm = this.formBuilder.group({
            description: ['Juego de eliminatoria', Validators.required],
            reservation_type: ['Privada', Validators.required],
            reservation_status: ['Activa', Validators.required],
            team1_id: [2, Validators.required],
            team2_id: [1, Validators.required],
            game_type: ['Multi', Validators.required],
            start: [new Date().toISOString(), Validators.required],
            end: [addDays(endOfMonth(new Date()), 3).toISOString(), Validators.required],
            occupation_type: ['Jugar', Validators.required],
            stage_id: [this.id]
        });
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }

    eventTimesChanged({
        event,
        newStart,
        newEnd
    }: CalendarEventTimesChangedEvent): void {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                return {
                    ...event,
                    start: newStart,
                    end: newEnd
                };
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);

    }

    handleEvent(action: string, event: CalendarEvent): void {
        console.log('action');
        console.log(action);
        console.log('event');
        console.log(event);
        if (action === 'Edited') {
            this.updateOccupation(1);
        } else if (action === 'Deleted') {
            this.deleteOccupation(1);
        }

        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
        console.log(this.events);
    }

    addEvent(): void {
        this.events = [
            ...this.events,
            {
                title: 'New event',
                start: startOfDay(new Date()),
                end: endOfDay(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ];
    }

    deleteEvent(eventToDelete: CalendarEvent) {
        console.log('elimineeste');
        console.log(eventToDelete);
        this.events = this.events.filter(event => event !== eventToDelete);
    }

    setView(view: CalendarView) {
        this.view = view;
    }

    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
}
