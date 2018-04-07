import { MaterialComponent } from './material/material.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TeradataComponent } from './teradata/teradata.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'mat', component: MaterialComponent },
    { path: 'tera', component: TeradataComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules });
