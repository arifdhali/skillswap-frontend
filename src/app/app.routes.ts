import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Contact } from './pages/contact/contact';
import { Pricing } from './pages/pricing/pricing';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"login",component:Login},
    {path:"register",component:Register},
    {path:"contact",component:Contact},
    {path:"pricing",component:Pricing},
];
