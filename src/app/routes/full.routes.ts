import { Routes, RouterModule } from '@angular/router';

export const FULL_ROUTES: Routes = [



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
        path: '',
        loadChildren: () => import('../components/charts/charts.module').then(m => m.ChartsModule)
    },
    {
      path: 'tournaments',
      loadChildren: './pages/tournament/view-tournament/view-tournament.module#ViewTournamentModule'
    },
    {
      path: 'createTournaments',
      loadChildren: './pages/tournament/create-tournament/create-tournament.module#CreateTournamentModule'
      },

    {
        path: 'schedules',
        loadChildren: () => import('../pages/schedule/schedule.module').then(m => m.ScheduleModule)
    },
    {
        path: 'schedule/:id',
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
      path: 'profileUser',
      loadChildren: './pages/profile-user/profile-user.module#ProfileUserModule'
  },
    {
        path: 'publicity',
        loadChildren: () => import('../pages/publicity/publicity.module').then(m => m.PublicityModule)
    }
];
