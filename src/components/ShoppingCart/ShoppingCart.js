import React, { useEffect, useState } from 'react';

// import Css
import './ShoppingCart.css';

// import react-redux
import { useDispatch, useSelector } from 'react-redux';

// import Components
import ShoppingCartItems from '../ShoppingCart/ShoppingCartItems';

// import Actions
import { loadTotalPrice } from "../../redux/shopping/shopping-actions";



function ShoppingCart(props) {

    const [totalPrice, setTotalPrice] = useState(0);

    const cartList = useSelector(state => state.books.cart);

    const [updateQtyPrice, setUpdateQtyPrice] = useState(0);

    const storeTotalPrice = useSelector(state => state.books.totalPrice);

    const dispatch = useDispatch();

    
    // useEffect(() => {
    //     let initialTotalPrice = 0 ;
    //     cartList.map((item) => {
    //         // initialTotalPrice += item.qty * item.price
            
    //     })

        
    // })

    return (
        <>
            <div className="shopping-cart container">
                {
                    cartList.map((cartItem, index) => <ShoppingCartItems updateQtyPrice={setUpdateQtyPrice} key={index} {...cartItem} /> )
                }
            </div>
            <div className="order-summary">
                <div className="container">
                    <div className="order-summary__header">
                        Order Summary:
                    </div>
                    <div className="order-summary__body">
                        Total Price: <span className="order-summary__total-price">{storeTotalPrice}</span>$ <span>{`(${cartList.length} item)`}</span>
                    </div>
                    <div className="order-summary__purchase">
                        <button className="order-summary__purchase--button">
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart;