import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks"; 
import { addProduct } from "../../redux/slices/test.slice";
import { testAsyncThunk } from "../../redux/thunks/test-async.thunk";


const TestComponent = () => {

    const [todoId, setTodoId] = useState(1);
    const {productsInCar} = useAppSelector(state => state.testState);
    const {todo} = useAppSelector(state => state.testState);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        console.log("escuchando subscripción");
    },[todo]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoId(Number(e.target.value));
    }

    const handleButtonClick = () => {
        dispatch(testAsyncThunk(todoId));
        dispatch(addProduct());
    }

    return (
        <div>
            <h1>componente de prueba</h1>
            <hr />

            <h2>Counter {productsInCar} </h2>
            <hr />

            {todo.status === "loading" ? <h2>...LOADING</h2> : null}
            {todo.status === "completed" ? <h2>{todo.value.title}</h2> : null}
            {todo.status === "rejected" ? <h2>NO EXISTE</h2> : null}

            <input type="number" onChange={handleInputChange}/>
            <button onClick={handleButtonClick}>search todo</button>
        </div>
    )
}

export default TestComponent;