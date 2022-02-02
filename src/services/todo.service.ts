import axios from "axios";
import { TodoInterface } from "../redux/interfaces/test-state.interface";

export default class TodoService {

  public static async getTodoById(id: number) {
    try {
      const todoRequest = await axios.get<TodoInterface>(`https://jsonplaceholder.typicode.com/todos/${id}`);
      if (todoRequest.status === 200) return todoRequest.data;
      else return null;
    } catch(error){
      if (axios.isAxiosError(error)) console.log(new Error(error.message));
      else return null;
    }
  }
}
