import { Routes } from '@angular/router';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

export const routes: Routes = [
    { path: 'planets', component: PlanetListComponent },
    { path: 'planets/:id', component: PlanetDetailComponent },
    { path: '', redirectTo: '/planets', pathMatch: 'full' },
    { path: '**', redirectTo: '/planets' }

];
