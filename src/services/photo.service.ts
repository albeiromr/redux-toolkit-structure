import axios from 'axios';

export default class PhotoService {
  public static async getPhotoById(id: number) {
    try {
      const request = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
      const data = await request.json();
      if (Object.keys(data).length > 0) {
        return data;
        console.log(data)
      } else {
        return false;
      }
    } catch (error) {
        return false;
    }
  }
}