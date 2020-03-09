import { Routes, RouterModule } from '@angular/router';

export const FULL_ROUTES: Routes = [

    {
        path: 'test',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'stages',
        loadChildren: () => import('../pages/stage/stage.module').then(m => m.StageModule)
    },
    {
        path: 'create-stage',
        loadChildren: () => import('../components/stages-form/stages-form.module').then(m => m.StagesFormModule)
    },
    {
        path: 'edit-stage/:id',
        loadChildren: () => import('../components/stages-form/stages-form.module').then(m => m.StagesFormModule)
    },
    {
        path: 'details-stage/:id',
        loadChildren: () => import('../components/stages-form/stages-form.module').then(m => m.StagesFormModule)
    },
    {
        path: 'list-stages',
        loadChildren: () => import('../components/list-stages/list-stages.module').then(m => m.ListStagesModule)
    },
    {
        path: 'tournaments',
        loadChildren: () => import('../pages/tournament/tournament.module').then(m => m.TournamentModule)
    },
    {
        path: 'schedules',
        loadChildren: () => import('../pages/schedule/schedule.module').then(m => m.ScheduleModule)
    },
    {
        path: 'reservations',
        loadChildren: () => import('../pages/reservation/reservation.module').then(m => m.ReservationModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: 'publicity',
        loadChildren: () => import('../pages/publicity/publicity.module').then(m => m.PublicityModule)
    }
];
