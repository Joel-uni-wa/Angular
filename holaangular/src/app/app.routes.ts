import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import { Productos } from './productos/productos';
export const routes: Routes = [
    { path: '', component: Inicio, title: 'Componente Inicio' },
    { path: 'inicio', component: Inicio, title: 'Componente Inicio' },
    { path: 'productos', component: Productos, title: 'Lista de Productos' },
    { path: '**', component: NoEncontrado, title: 'Recurso no encontrado' }
];
