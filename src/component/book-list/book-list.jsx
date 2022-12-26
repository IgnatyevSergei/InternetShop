import React, {Component} from "react";
import BookListItem from "../book-list-item";
import "./book-list.css";
import withBookService from "../hoc";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {connect} from "react-redux";
import {compose} from "redux";
import {fetchBooks, onAddToCart} from "../../action";

// class BookList extends Component {
//   state = {
//     isLoading: true,
//     data: null,
//     hasError: null,
//   };
//
//   componentDidMount() {
//     this.props.service
//       .then((data) => {
//         this.setState({
//           data,
//           isLoading: false,
//         });
//       })
//       .catch((error) => {
//         this.setState({
//           isLoading: false,
//           hasError: true,
//         });
//       });
//   }
//
//   render() {
//     const books = this.state.data;
//
//     if (this.state.hasError) {
//       return <ErrorIndicator />;
//     }
//
//     if (!books) {
//       return <Spinner />;
//     }
//
//     return (
//       <ul className="book-list">
//         {books.map((book) => {
//           return (
//             <li key={book.id}>
//               <BookListItem {...book} />
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }
//
// export default withBookService()(BookList);


class BookList extends Component {


    componentDidMount() {
        // this.props.booksLoading()
        // this.props.service
        //     .then((data) => this.props.booksLoaded(data))
        //     .catch((error) => this.props.booksError(error))

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
                            <BookListItem {...book} onAddToCart={onAddToCart}  />
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
        onAddToCart: (id)=> dispatch(onAddToCart(id))

    }
}
//
// const mapDispatchToProps = {
//     booksLoading,
//     booksError,
//     booksLoaded
// }


export default compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps))
(BookList);
