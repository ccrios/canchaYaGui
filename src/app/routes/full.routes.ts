import { Routes, RouterModule } from '@angular/router';

export const FULL_ROUTES: Routes = [


    {
        path: 'stages',
        loadChildren: './pages/stage/stage.module#StageModule'
    },
    {
        path: 'create-stage',
        loadChildren: './components/stages-form/stages-form.module#StagesFormModule'
    },
    {
        path: 'edit-stage/:id',
        loadChildren: './components/stages-form/stages-form.module#StagesFormModule'
    },
    {
        path: 'list-stages',
        loadChildren: './components/list-stages/list-stages.module#ListStagesModule'
    },
    {
        path: 'tournaments',
        loadChildren: './pages/tournament/tournament.module#TournamentModule'
    },
    {
      path: 'createTournaments',
      loadChildren: './pages/tournament/create-tournament/create-tournament.module#CreateTournamentModule'
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
