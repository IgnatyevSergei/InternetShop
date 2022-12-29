import React from 'react';
import './store-cart-table.css'
import {connect} from "react-redux";
import {onAddToCart, removeAllCart, removeBookFromCart} from "../../action";
import Total from "../total";





const StoreCartTable = ({cartItems, onIncrease, onDelete, onDecrease}) => {

    const renderRow = (item, ind) => (<tr key={item.id} >
        <td>{ind+1}</td>
        <td>{item.title}</td>
        <td>{item.count}</td>
        <td>$ {item.total}</td>
        <td>
            <button className='btn btn-outline-success btn-sm'
                    onClick={()=> onIncrease(item.id)}>
                <i className='bi bi-plus-circle'/>
            </button>
            <button className='btn btn-outline-warning btn-sm'
                    onClick={()=>onDecrease(item.id)}>
                <i className='bi bi-dash-circle'/>
            </button>
            <button className='btn btn-outline-danger btn-sm'
                    onClick={()=>onDelete(item.id)}>
                <i className='bi bi-trash'/>
            </button>
        </td>
    </tr>)

    return (
        <div className='store-cart-table'>
            <h2>Order</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {cartItems.map(renderRow)}
                </tbody>
            </table>
            <Total sum={cartItems.reduce((acc, el)=> acc + el.total, 0)} />
        </div>
    );
};

const mapSateToProps = (state) => {
    console.log(state)
    return {
    cartItems: state.cartItems
    }
}

const mapDispatchToProps =  {
    onIncrease: onAddToCart,
    onDelete: removeAllCart,
    onDecrease: removeBookFromCart

}

export default connect(mapSateToProps, mapDispatchToProps)(StoreCartTable) ;