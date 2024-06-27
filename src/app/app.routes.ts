import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorksComponent } from './works/works.component';
import { WorkDetailsComponent } from './works/work-details/work-details.component';
import { InventDetailsComponent } from './works/invent-details/invent-details.component';

const routes: Routes = [
    {
        path: '',
        component: AboutMeComponent,
        title: 'Anderson Frias - Homepage',
    },
    {
        path: 'works',
        component: WorksComponent,
        title: 'Works page'
    },
    {
        path: 'works/:id',
        component: WorkDetailsComponent,
        title: 'Work page'
    },
    {
        path: 'invents/:id',
        component: InventDetailsComponent,
        title: 'Invent page'
    }
];

export default routes;