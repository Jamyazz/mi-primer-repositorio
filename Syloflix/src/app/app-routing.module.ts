import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { NotFoundComponent } from './shared/views/not-found/not-found.component';

// import { HomeComponent } from './modules/dashboard/views/home/home.component';
// import { AuthComponent } from './modules/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    canMatch: [AuthGuard.AuthGuardMatch],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then
      (m => m.DashboardModule),
  },
  
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then
        (m => m.AuthModule),
  },

  {
    path: '**',
    component: NotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
