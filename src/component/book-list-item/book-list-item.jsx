import React from 'react';
import './book-list-item.css'

const BookListItem = (props) => {

    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={props.coverImage} alt="img"/>
            </div>

            <div className='book-detail'>
                <p className='book-tittle'>{props.title}</p>
                <p className='book-author'>{props.author}</p>
                <p className='book-price'>{props.price} $</p>
                <button className='btn btn-primary add-to-card'
                        onClick={() => {
                            props.onAddToCart(props.id)
                        }}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default BookListItem;