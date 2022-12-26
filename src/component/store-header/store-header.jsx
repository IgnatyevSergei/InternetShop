import React from 'react';
import './store-header.css'
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const StoreHeader = ({cartItems}) => {

    const amountItems = cartItems.reduce((acc, el)=> acc + el.count, 0)

    return (
        <header className='store-header'>
            <Link to='/' className='logo text-dark'>
                Shop

            </Link>
            <Link to='/cart' className='shopping-cart'>
                <i className='cart-icon bi bi-cart-fill'/>
                Items {amountItems}
            </Link>

        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}



export default connect(mapStateToProps)(StoreHeader) ;