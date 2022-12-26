import React from 'react';
import './total.css'
import {connect} from "react-redux";

const Total = ({cartItems}) => {
    const total = cartItems.reduce((acc, el)=>acc+el.total, 0)
    return (
        <div className='total-container'>
            <span>Total: </span>
            <span className='score'>{total} $</span>
        </div>
    );
};

const mapStateToProps = (state) =>{
   return {
       cartItems: state.cartItems


}}

export default connect(mapStateToProps)(Total);