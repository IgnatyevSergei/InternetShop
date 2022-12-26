import {
    ALL_REMOVE_FROM_CART,
    BOOK_ADDED_TO_CART, BOOK_REMOVE_FROM_CART,
    FETCH_BOOKS_FAILURE,
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_SUCCESS
} from "../action";

const initialState = {
    isLoading: false,
    books: [],
    hasError: null,
    cartItems: []
}

const updateCartItems = (cartItems, newItem, itemIndex) => {

    if (newItem.count === 0) {
        return [
            ...cartItems.slice(0, itemIndex),
            ...cartItems.slice(itemIndex + 1)
        ]
    }

    if (itemIndex === -1) {
        return [
            ...cartItems,
            newItem
        ]
    }
    return [
        ...cartItems.slice(0, itemIndex),
        newItem,
        ...cartItems.slice(itemIndex + 1)
    ]

}

const updateCartItem = (book, item = {}, quantity) => {
    const {id = book.id, count = 0, title = book.title, total = 0} = item

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }

}

const updateOrder = (state, bookId, quantity) => {
    const {books, cartItems} = state
    const book = books.find(book => book.id === bookId)
    const itemIndex = cartItems.findIndex(({id}) => id === bookId)
    const item = cartItems[itemIndex]
    const newItem = updateCartItem(book, item, quantity)

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }


}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: null
            }
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: action.payload
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                books: action.payload
            }
        case BOOK_ADDED_TO_CART: {

            return updateOrder(state, action.payload, 1)


        }

        case BOOK_REMOVE_FROM_CART: {
            return updateOrder(state, action.payload, -1)
        }

        case ALL_REMOVE_FROM_CART: {
            const item = state.cartItems.find(({id})=> id === action.payload)
            return updateOrder(state, action.payload, -item.count)
        }


        default :
            return state
    }
}

export default reducer