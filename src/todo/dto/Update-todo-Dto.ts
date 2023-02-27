import { TodoStatusEnum } from "src/todo/Todo.model";

export class UpdatetodoDto {
    name : string ;
    description : string ;
    statut : TodoStatusEnum ;
}