import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';

import { HeroesComponent } from '../app/heroes/heroes.component';
import { DashboardComponent  } from '../app/dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { WatchComponent } from './watch/watch.component';




const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'watch', component: WatchComponent },
   
  ];
@NgModule({ 
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
})

export class AppRoutingModule { 

}
