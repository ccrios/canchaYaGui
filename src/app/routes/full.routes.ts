import { Routes, RouterModule } from '@angular/router';

export const FULL_ROUTES: Routes = [

    {
        path: 'test',
        loadChildren: './pages/login/login.module#LoginModule'
    },
    {
        path: 'stages',
        loadChildren: './pages/stage/stage.module#StageModule'
    },
    {
        path: 'tournaments',
        loadChildren: './pages/tournament/tournament.module#TournamentModule'
    },
    {
        path: 'schedules',
        loadChildren: './pages/schedule/schedule.module#ScheduleModule'
    },
    {
        path: 'reservations',
        loadChildren: './pages/reservation/reservation.module#ReservationModule'
    },
    {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfileModule'
    },
    {
        path: 'publicity',
        loadChildren: './pages/publicity/publicity.module#PublicityModule'
    }
];
