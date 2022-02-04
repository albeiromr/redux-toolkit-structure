import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getTodoByIdThunk } from '../../redux/todo/thunks/getTodoByIdyThunk';
import './todo.component.scss';

const TodoComponent = () => {

    const dispatch = useAppDispatch();
    const {status, value} = useAppSelector(state => state.todoReducer.todo);

    const [id, setId]  = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setId(Number(e.target.value));  
    }

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getTodoByIdThunk(id));
    }

    return (
        <div className='todo'>
            <h2 className='todo__title'>Todo</h2>
            <ul>
                <li className='todo__property'>{value.userId}</li>
                <li className='todo__property'>{value.id}</li>
                <li className='todo__property'>{value.title}</li>
                <li className='todo__property'>{value.completed ? "Todo is completed" : "Todo is not completed"}</li>
            </ul>
            <form onSubmit={handleFormSubmit} className='todo__form'>
                <input type="number" className='todo__form-input' onChange={handleInputChange}/>
                <button type='submit'className='todo__form-button'>Buscar</button>
            </form>
        </div>
    )
}

export default TodoComponent;