import * as actionTypes from './shopping-types';


export const addToCart = (itemId, itemPrice) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId,
            price: itemPrice
        }
    }
}

export const removeFromCart = (itemId, itemTotalPrice) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId,
            price: itemTotalPrice
        }
    }
}

export const adjustQty = (itemId, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value
        }
    }
}

export const loadTotalPrice = (newPrice) => {
    return {
        type: actionTypes.LOAD_TOTAL_PRICE,
        payload: {
            newPrice
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}

export const setTotalPrice = (totalPrice) => {
    console.log(totalPrice)
    return {
        type: actionTypes.SET_TOTAL_PRICE,
        payload: totalPrice
    }
}