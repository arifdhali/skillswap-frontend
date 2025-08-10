import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Contact } from './pages/contact/contact';
import { Pricing } from './pages/pricing/pricing';
import { User } from './pages/user/user';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"login",component:Login},
    {path:"register",component:Register},
    {path:"users",component:User},
    {path:"contact",component:Contact},
    // {path"user"},
    {path:"pricing",component:Pricing},
];
