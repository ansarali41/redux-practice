import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Services/actions/counterAction'

const CounterTwo = () => {
    const count = useSelector(state => state.counterReducer.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={() => dispatch(increment(11))}>Increment +</button>
            <button onClick={() => dispatch(decrement(7))}>Decrement -</button>

        </div>
    );
};

export default CounterTwo;