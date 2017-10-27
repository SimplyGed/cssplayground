import { Route } from '@angular/router';

import { RotateComponent } from './rotate/rotate.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ElementsComponent } from './elements/elements.component';
import { ProgressComponent } from './progress/progress.component';

export const CssRoutes: Route[] = [
    { path: 'rotate', component: RotateComponent },
    { path: 'layout', component: LayoutComponent },
    { path: 'elements', component: ElementsComponent },
    { path: 'progress', component: ProgressComponent },
    { path: '', component: HomeComponent }
];

