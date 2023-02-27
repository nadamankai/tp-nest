import { Controller, NotFoundException } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put, Req, Res  } from '@nestjs/common/decorators';

import { TodoModel, TodoStatusEnum } from './Todo.model';

import { AddtodoDto } from 'src/todo/dto/Add-todo-Dto';
import { UpdatetodoDto } from 'src/todo/dto/Update-todo-Dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
   constructor(
    private todoService : TodoService) {}
   // this.todos = []
   
//private todos :TodoModel[] ;
@Get()
getTodos(){
    return this.todoService.getTodos() ; 
    
} 

//récupérer un todo via son id.
@Get('/:id')
gettodobyid(@Param('id') id){
return this.todoService.getTodoByid(id) ;
}
 //creer un todo
@Post()
ajouterTodo(@Body() newtodo : AddtodoDto) {
    this.todoService.addTodo(newtodo)
}

//supprimer un Todo via son id 
@Delete("/:id")
deleteTodo(@Param('id') id){
this.todoService.deletetodo(id) ;

}

// modifier le todo
@Put('/:id')
modifiertodo(@Param('id') id : string , @Body() newTodo : UpdatetodoDto){
    console.log(1);
    
 return (this.todoService.updatetodo(id,newTodo) );
} 

}