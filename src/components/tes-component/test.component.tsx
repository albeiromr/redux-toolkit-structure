import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks"; 
import { addProduct } from "../../redux/slices/test.slice";
import { getPhotoByIdThunk } from "../../redux/thunks/getPhotoByIdThunk";
import { testAsyncThunk } from "../../redux/thunks/test-async.thunk";


const TestComponent = () => {

    const [id, setId] = useState(1);
    const {productsInCar} = useAppSelector(state => state.testState);
    const {todo} = useAppSelector(state => state.testState);
    const {photo} = useAppSelector(state => state.testState);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        console.log("escuchando subscripción");
    },[id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(Number(e.target.value));
    }

    const handleButtonClick = () => {
        dispatch(testAsyncThunk(id));
        dispatch(getPhotoByIdThunk(id));
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

            <hr />

            {photo.status === "loading" ? <h2>...LOADING</h2> : null}
            {photo.status === "completed" ? <img src={photo.value.thumbnailUrl} alt="photo" /> : null}
            {photo.status === "rejected" ? <h2>La foto no existe</h2> : null}

        </div>
    )
}

export default TestComponent;