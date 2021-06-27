import React from 'react'


function cart (state={}, action) {

    switch (action.type) {
        
        case 'ADD_TO_CART':
            
        return {
            ...state,
            cartItems: [
                ...cartItems,
                state.cartItems.find(item => item.id === action.id) ? 
            ]
        }
            
    }
}

export default cart;