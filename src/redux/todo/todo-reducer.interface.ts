import { ITodo } from "../../Interfaces/todo.interface";
import { AsyncStatusEnum } from "../../enums/async-status.enum";


export interface ITodoReducer {
  todo: {
    status:  AsyncStatusEnum;
    value: ITodo;
  }
}