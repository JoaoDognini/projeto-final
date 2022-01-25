import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';
import { ConversorRoutes } from './conversor/conversor-routing.module';
import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { TarefaRoutes } from './tarefas';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes, 
  ...CalculadoraRoutes,
  ...ConversorRoutes,
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
