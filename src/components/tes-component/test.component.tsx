import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks"; 
import { addProduct } from "../../redux/slices/test.slice";
import { testAsyncThunk } from "../../redux/thunks/test-async.thunk";


const TestComponent = () => {

    const {productsInCar} = useAppSelector(state => state.testState);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(addProduct());
        }, 3000)
        dispatch(testAsyncThunk(1));
    },[])

    return (
        <div>
            <h1>componente de prueba</h1>
            <hr />
            <h2>Counter {productsInCar} </h2>
            <hr />
        </div>
    )
}

export default TestComponent;