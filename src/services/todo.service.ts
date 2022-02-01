export default class TodoService {
    
  public static async getTodoById(id: number) {
    //no se hace con try catch por que la respuesta de esta api no trae headers,
    //aunque halla o no halla error siempre retorna un objeto, por lo tanto el,
    //catch no lo detecta
    
    //mas información en :
    //https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors

    const request = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await request.json();
    if (Object.keys(data).length > 0) {
      return data;
    } else {
      return false;
    }
  }
}
