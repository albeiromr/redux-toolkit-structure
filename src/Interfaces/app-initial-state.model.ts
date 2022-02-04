import  {ITodo} from "./todo.interface";
import { IPhoto } from "./photo.interface";
import { AsyncStatusEnum } from "../enums/async-status.enum";


export interface AppInitialStateModel {
  counter: number;
  todo: {
    status:  AsyncStatusEnum;
    value: ITodo;
  };
  photo: {
    status:  AsyncStatusEnum;
    value: IPhoto;
  }
}



