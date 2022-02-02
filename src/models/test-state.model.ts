import  {TodoModel} from "./todo.model";
import { PhotoModel } from "./photo.model";


export interface TestStateModel {
  productsInCar: number;
  todo: {
    status:  "loading" | "completed" | "rejected";
    value: TodoModel;
  };
  photo: {
    status:  "loading" | "completed" | "rejected";
    value: PhotoModel;
  }
}



