import React, {Component} from "react";
import BookListItem from "../book-list-item";
import "./book-list.css";
import withBookService from "../hoc";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {connect} from "react-redux";
import {compose} from "redux";
import {fetchBooks, onAddToCart} from "../../action";


class BookList extends Component {

    componentDidMount() {

        this.props.fetchBooks()
    }


    render() {
        const {books, isLoading, hasError, onAddToCart} = this.props;


        if (hasError) {
            return <ErrorIndicator/>;
        }

        if (isLoading) {
            return <Spinner/>;
        }


        return (
            <ul className="book-list">
                {books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem {...book} onAddToCart={onAddToCart}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {service} = ownProps
    return {
        fetchBooks: fetchBooks(service, dispatch),
        onAddToCart: (id) => dispatch(onAddToCart(id))

    }
}

export default compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps))
(BookList);
