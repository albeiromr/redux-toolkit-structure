import  {TodoModel} from "./todo.model";
import { PhotoModel } from "./photo.model";
import { AsyncStatusEnum } from "../enums/async-status.enum";


export interface AppInitialStateModel {
  productsInCar: number;
  todo: {
    status:  AsyncStatusEnum;
    value: TodoModel;
  };
  photo: {
    status:  AsyncStatusEnum;
    value: PhotoModel;
  }
}



