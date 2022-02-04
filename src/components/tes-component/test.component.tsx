import React, { useEffect, useState } from "react";
import { AsyncStatusEnum } from "../../enums/async-status.enum";
import { useAppSelector, useAppDispatch } from "../../redux/hooks"; 
import { addCounter } from "../../redux/counter/counter.reducer";
import { getPhotoByIdThunk } from "../../redux/photo/thunks/getPhotoByIdThunk";
import { getTodoByIdThunk } from "../../redux/todo/thunks/getTodoByIdyThunk";


const TestComponent = () => {

    const [id, setId] = useState(1);
    const {counter} = useAppSelector(state => state.counterReducer);
    const {todo} = useAppSelector(state => state.todoReducer);
    const {photo} = useAppSelector(state => state.photoReducer);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        console.log("escuchando subscripción");
    },[id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(Number(e.target.value));
    }

    const handleButtonClick = () => {
        dispatch(getTodoByIdThunk(id));
        dispatch(getPhotoByIdThunk(id));
        dispatch(addCounter());
    }

    return (
        <div>
            <h1>componente de prueba</h1>
            <hr />

            <h2>Counter {counter} </h2>
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