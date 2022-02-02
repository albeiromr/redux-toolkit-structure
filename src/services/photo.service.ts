import axios from 'axios';
import { PhotoModel } from '../models/photo.model';

export default class PhotoService {

  public static async getPhotoById(id: number) {
    try {
      const photoRequest = await axios.get<PhotoModel>(`https://jsonplaceholder.typicode.com/photos/${id}`);
      if ( photoRequest.status === 200 ) return photoRequest.data; 
      else return null;
    } catch (error) {
      if (axios.isAxiosError(error)) console.log(new Error(error.message));
      return null;
    }
  }
}