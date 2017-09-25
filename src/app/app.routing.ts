import { Route } from '@angular/router';

import { RotateComponent } from './rotate/rotate.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

export const CssRoutes: Route[] = [
    { path: 'rotate', component: RotateComponent },
    { path: 'layout', component: LayoutComponent },
    { path: '', component: HomeComponent }
];

