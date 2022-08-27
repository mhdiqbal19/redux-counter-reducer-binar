import React from 'react'
import { useDispatch } from 'react-redux';
import TYPES from '../Redux/Types';
import { useSelector } from 'react-redux';

const CounterAction = () => {
    const dispatch = useDispatch()
    const {counterReducer} = useSelector((state) => state)


    const handlePlus = () => {
        const result = counterReducer.total + 1;
        dispatch({
            type: TYPES.INCREMENT,
            payload: result
        })
    }

    const handleMin = () => {
        const result = counterReducer.total - 1;
        dispatch({
            type: TYPES.DECREMENT,
            payload: result
        })
    }

    const handleReset = () => {
        const result = 0;
        dispatch({
            type: TYPES.RESET,
            payload: result
        })
    }

    
  return (
    <div>
        <button onClick={handleMin}>minus</button>
        <button onClick={handlePlus}>plus</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default CounterAction