import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AddtodoDto } from 'src/todo/dto/Add-todo-Dto';
import { TodoModel, TodoStatusEnum } from './Todo.model';

import { UpdatetodoDto } from 'src/todo/dto/Update-todo-Dto';
import { Token } from 'src/common/common.module';
@Injectable()
export class TodoService {
  constructor(@Inject(Token.uuid) private uuid) {
    this.todos = [];
  }
  private todos: TodoModel[];

  getTodos(): TodoModel[] {
    return this.todos;
  }

  addTodo(newTodo: AddtodoDto) {
    const todo = new TodoModel();
    const { name, description } = newTodo;
    todo.name = name;
    todo.description = description;
    todo.id = this.uuid();
    todo.statut = TodoStatusEnum.waiting;
    todo.datedecreation = new Date();
    this.todos.push(todo);
  }

  getTodoByid(id): TodoModel {
    const todo = this.todos.find((actualtodo) => actualtodo.id === id);
    if (todo) {
      return todo;
    } else throw new NotFoundException("le todo n'existe pas");
  }

  deletetodo(id) {
    const index = this.todos.findIndex((element) => element.id === id);
    if (index >= 0) {
      this.todos.splice(index, 1);
      return `le todo d'id ${id} a été supprimé avec succés`;
    } else {
      throw new NotFoundException("le todo n'existe pas");
    }
  }
  updatetodo(id: string, newTodo: UpdatetodoDto) {
    console.log(2);

    console.log(this.todos.findIndex);

    const index = this.todos.findIndex((element) => element.id === id);
    console.log('index', index);

    if (index >= 0) {
      this.todos[index].name = newTodo.name ?? this.todos[index].name;
      this.todos[index].description = newTodo.description
        ? newTodo.description
        : this.todos[index].description;
      this.todos[index].statut = newTodo.statut
        ? newTodo.statut
        : this.todos[index].statut;
      console.log(index);

      return `le to do did ${id} a été changé avec succés`;
    } else {
      throw new NotFoundException(`le to do did ${id} n'existe pas `);
    }
  }
}
