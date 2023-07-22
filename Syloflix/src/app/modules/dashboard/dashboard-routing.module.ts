import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards';
import { HomeComponent } from './views/home/home.component';
import { SeriesComponent } from './views/series/series.component';
import { MoviesComponent } from './views/movies/movies.component';
import { PopularNewsComponent } from './views/popular-news/popular-news.component';
import { SearchComponent } from './views/search/search.component';
import { MylistComponent } from './views/mylist/mylist.component';

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
    path: 'series', 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:SeriesComponent,
  },
  { 
    path: 'movies', 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:MoviesComponent,
  },
  { 
    path: 'popular', 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:PopularNewsComponent,
  },
  { 
    path: "search", 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:SearchComponent,
  },
  { 
    path: "mylist", 
    canActivate: [AuthGuard.AuthGuardActivate],
    component:MylistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
