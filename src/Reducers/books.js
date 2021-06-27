import * as actionTypes from '../redux/shopping/shopping-types';

const INITIAL_STATE = {
    bookList: [],
    cart: [],
    totalPrice: 0
}

function books (state = INITIAL_STATE, action) {

    console.log(state, action)

    switch (action.type) {
        case 'INITIAL_BOOKS':
            return {
                ...state,
                bookList: action.bookList
            }

        case actionTypes.ADD_TO_CART:


            let item = state.bookList.find(book => book.id === action.payload.id);

            let cartItemStatus = state.cart.find(book => book.id === action.payload.id) ? true : false
            
            return {
                ...state,
                cart: cartItemStatus ? state.cart.map((book) => book.id === action.payload.id ? {...book, qty: book.qty + 1} : book) : [...state.cart, {...item, qty: 1}],
                totalPrice: state.totalPrice += action.payload.price
            }

        case actionTypes.REMOVE_FROM_CART:

            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                totalPrice: state.totalPrice - action.payload.price
            }

        case actionTypes.ADJUST_QTY:

            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
            }

        case actionTypes.SET_TOTAL_PRICE:

            return {
                ...state,
                totalPrice: action.payload
            }
        
        default:
            return state;
    }
}

export default books;