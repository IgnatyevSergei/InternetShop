import React from 'react';
import './store-header.css'
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const StoreHeader = ({totalOrderItems}) => {

    return (
        <header className='store-header'>
            <Link to='/' className='logo text-dark'>
                Shop

            </Link>
            <Link to='/cart' className='shopping-cart'>
                <i className='cart-icon bi bi-cart-fill'/>
                Items {totalOrderItems}
            </Link>

        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        totalOrderItems: state.totalOrderItems
    }
}



export default connect(mapStateToProps)(StoreHeader) ;