import { createAsyncThunk } from "@reduxjs/toolkit";

export const testAsyncThunk = createAsyncThunk(
    'test-state/fetchToDoById',
    async (id: number, {rejectWithValue}) => {
        
        const request = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await request.json();

        //no se hace con try catch por que la respuesta de esta api no trae headers, 
        //aunque halla o no halla error siempre retorna un objeto, por lo tanto el,
        //catch no lo detecta

        //mas información en :
        //https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors
        
        if(Object.keys(data).length > 0){
            return data;
        }else{
            return rejectWithValue(new Error());
        }
    }
)