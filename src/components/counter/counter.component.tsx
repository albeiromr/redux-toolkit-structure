import React, { ElementRef, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import "./counter.component.scss"
import { addCounter, restCounter } from '../../redux/counter/counter.reducer'
import useDidUpdate from '../../hooks/component-did-update.hook'

const CounterComponent = () => {

    const dispatch =  useAppDispatch();
    const {counter} = useAppSelector(state => state.counterReducer);

    const handleAddClick = () => {
        dispatch(addCounter());
    }

    const handleRestClick = () => {
        dispatch(restCounter(1));
    }

    //Practicando ciclo de vida --------------------------------------------
    //----------------------------------------------------------------------

    useDidUpdate(() => {
        console.log("me ejecuto solo cuando el counter cambia, he ignoro el primer renderizado del componente");
    }, [counter]);

    useEffect(() => {
      console.log("me ejecuto solo cuando el componente se monta por primera vez");

      return () => {
        console.log("me ejecuto cuando el componente se desmonta");
      };
    }, []);

    //Fin de la practica del ciclo de vida -------------------------------------
    //--------------------------------------------------------------------------
    

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