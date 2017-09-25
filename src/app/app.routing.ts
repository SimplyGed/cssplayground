import { Route } from '@angular/router';

import { RotateComponent } from './rotate/rotate.component';
import { HomeComponent } from './home/home.component';

export const CssRoutes: Route[] = [
    { path: 'rotate', component: RotateComponent },
    { path: '', component: HomeComponent }
];

