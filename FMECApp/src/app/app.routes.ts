import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import { News } from './components/news/news';
import { Membership } from './components/membership/membership';
import { Aboutus } from './components/aboutus/aboutus';
import { Events } from './components/events/events';
import { Funddrive } from './components/funddrive/funddrive';
import { Inmemoriam } from './components/inmemoriam/inmemoriam';

export const routes: Routes = [
    {
        path: '',
        component: Homepage
    },
    {
        path: 'home',
        component: Homepage
    },
    {
        path: 'news',
        component: News
    },
    {
        path: 'membership',
        component: Membership
    },
    {
        path: 'aboutus',
        component: Aboutus
    },
    {
        path: 'events',
        component: Events
    },
    {
        path: 'funddrive',
        component: Funddrive
    },
    {
        path: 'inmemoriam',
        component: Inmemoriam
    },
];
