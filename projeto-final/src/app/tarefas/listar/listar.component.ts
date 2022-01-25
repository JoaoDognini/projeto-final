import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa? "' + tarefa.nome + '"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void{
    if(confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?"')){
      this.tarefaService.alternarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
  
}
