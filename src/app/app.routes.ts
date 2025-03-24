import { Routes } from '@angular/router';
import { BusinessesComponent } from './businessesComponent/businesses.component';
import { HomeComponent } from './homeComponent/home.component';
import { BusinessComponent } from './businessesComponent/businessComponent/business.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'businesses',
        component: BusinessesComponent
    },
    {
        path: 'businesses/:id',
        component: BusinessComponent
    }
];
