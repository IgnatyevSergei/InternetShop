import React from 'react';
import './total.css'

const Total = (props) => {
    return (
        <div className='total-container'>
            <span>Total: </span>
            <span className='score'> {props.sum} $</span>
        </div>
    );
};

export default Total;