import { Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ErrorSiteComponent } from './components/error-site/error-site.component';

export const routes: Routes = [
    {
        path:'', component:WrapperComponent
    },
    {
        path:'error',component:ErrorSiteComponent
    },
    { 
        path: '**', component: WrapperComponent

    }
];
