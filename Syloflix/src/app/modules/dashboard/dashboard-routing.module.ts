import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards';
import { HomeComponent } from './views/home/home.component';
import { WatchComponent } from './views/watch/watch.component';
import { BrowseComponent } from './views/browse/browse.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:HomeComponent,
  },
  { 
    path: "watch", 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:WatchComponent,
  },
  { 
    path: "browse/aat/series", 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:BrowseComponent,
  },
  { 
    path: "browse/aat/movies", 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:BrowseComponent,
  },
  { 
    path: "browse/aat/popular", 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:BrowseComponent,
  },
  { 
    path: "browse/aat/mylist", 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:BrowseComponent,
  },
  { 
    path: "browse/aat/search", 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:BrowseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
