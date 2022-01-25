import { Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar';
import { EditarComponent } from './editar';
import { ListarComponent } from './listar';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarComponent
    }

]