import React, { useEffect, useState } from "react";
import { AsyncStatusEnum } from "../../enums/async-status.enum";
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

            {todo.status === AsyncStatusEnum.idle && <h2>Por favor busca un post</h2>}
            {todo.status === AsyncStatusEnum.loading && <h2>...LOADING</h2>}
            {todo.status === AsyncStatusEnum.completed && <h2>{todo.value.title}</h2>}
            {todo.status === AsyncStatusEnum.rejected && <h2>el post no existe</h2>}

            <input type="number" onChange={handleInputChange}/>
            <button onClick={handleButtonClick}>search todo</button>

            <hr />

            {photo.status === AsyncStatusEnum.idle && <h2>Por favor busca una foto</h2>}
            {photo.status === AsyncStatusEnum.loading && <h2>...LOADING</h2>}
            {photo.status === AsyncStatusEnum.completed && <img src={photo.value.thumbnailUrl} alt="photo" />}
            {photo.status === AsyncStatusEnum.rejected && <h2>La foto no existe</h2>}

        </div>
    )
}

export default TestComponent;