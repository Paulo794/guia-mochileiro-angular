import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { Register} from './componentes/register/register';
import {Home} from './componentes/home/home';
    
export const routes: Routes = [
    { path: '', component: Login },
    { path: 'register', component: Register},
    { path: 'home', component: Home},

];
