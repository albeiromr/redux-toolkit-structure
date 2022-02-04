import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import "./counter.component.scss"
import { addCounter, restCounter } from '../../redux/counter/counter.reducer'

const CounterComponent = () => {

    const dispatch =  useAppDispatch();
    const {counter} = useAppSelector(state => state.counterReducer);

    const handleAddClick = () => {
        dispatch(addCounter());
    }

    const handleRestClick = () => {
        dispatch(restCounter(1));
    }

    return(
        <div className='counter'>
            <h1 className="counter__title">Counter</h1>
            <div className='counter__counter-container'>
                <h2 className='counter__counter-number'>{counter}</h2>
            </div>
            <div className='counter__buttons-container'>
                <button className='counter__butons-button' onClick={handleRestClick}>quitar</button>
                <button className='counter__butons-button' onClick={handleAddClick}>agregar</button>
            </div>
        </div>
    )
}

export default CounterComponent;