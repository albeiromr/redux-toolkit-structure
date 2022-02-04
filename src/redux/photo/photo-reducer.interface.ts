import { IPhoto } from "../../Interfaces/photo.interface";
import { AsyncStatusEnum } from "../../enums/async-status.enum";


export interface IPhotoReducer {
  photo: {
    status:  AsyncStatusEnum;
    value: IPhoto;
  }
}