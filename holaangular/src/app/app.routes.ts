import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { NoEncontrado } from './no-encontrado/no-encontrado';
export const routes: Routes = [
    { path: '', component: Inicio, title: 'Componente Inicio' },
    { path: 'inicio', component: Inicio, title: 'Componente Inicio' },
    { path: '**', component: NoEncontrado, title: 'Recurso no encontrado' }
];
