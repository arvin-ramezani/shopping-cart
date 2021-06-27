import React, { useState } from 'react';

// import react-redux
import { useDispatch, useSelector } from 'react-redux';

// import Actions
import {adjustQty, removeFromCart, setTotalPrice} from '../../redux/shopping/shopping-actions';


function ShoppingCartItems(props) {

    const [editStatus, setEditStatus] = useState();

    const [qtyInputValue, setQtyInputValue] = useState(props.qty);

    const cartList = useSelector(state => state.books.cart)

    const dispatch = useDispatch()


    let qtyHandler = (editButton) => {

        editButton.classList.toggle('active');
        editButton.previousSibling.classList.toggle('active');

        setEditStatus( ! editStatus );

        if (editStatus) {

            totalPriceHandler(props.id, qtyInputValue);
            dispatch(adjustQty(props.id, qtyInputValue));
            props.updateQtyPrice(qtyInputValue * props.price);

        }
        // console.log(qtyInputValue, qtyInputValue * props.price)
        
    }

    let deleteCartItemsHandler = () => {

        let totalItemsPrice = props.qty * props.price

        dispatch(removeFromCart(props.id, totalItemsPrice))
    }

    let totalPriceHandler = (id, qty) => {
        let totalPrice = 0
        let targetPrice = 0

        cartList.map(item => item.id === id ? targetPrice = (item.price * qty) : totalPrice += item.qty * item.price)

        console.log(totalPrice, targetPrice)
        dispatch(setTotalPrice(totalPrice + targetPrice))
    }

    return (
        <div className="shopping-cart__items">
            <div className="cart__img">
                <img src={props.image} />
            </div>
            <div className="cart__body">
                <div className="cart__book-name">
                    <div className="cart__name">{props.title}</div>
                    <div className="cart__writer">{props.writer}</div>
                </div>
                <div className="cart__book-pages">Pages: {props.pageCount}</div>
                <div className="cart__single-price">
                    price: ${props.price}
                </div>
                <div className="cart__qty"> 
                    <div className="cart__qty--input">
                        quantity: {
                            editStatus ? <input type="number" min="1" step="1" value={qtyInputValue} onChange={(e) => setQtyInputValue(e.target.value)} /> 
                            : <span className="cart__qty--text">{props.qty}</span>
                        }
                    </div>
                    <button type="button" className="cart__qty--button" onClick={(e) => qtyHandler(e.target)}>{editStatus ? "OK" : "Edit"}</button>
                </div>
                {/* <button type="button">+</button>
                <button type="button">-</button> */}
            </div>
            <div className="cart__footer">
                <div className="cart__delete">
                    <button className="cart__delete--button" onClick={() => deleteCartItemsHandler()}>
                        <i className="fas fa-trash-alt fa-2x"></i>
                    </button>
                </div>
                <div className="cart__price-block">
                    <span className="cart__qty">{`(${props.qty} items)`}</span>
                    <span className="cart__each-price">$ {props.price * props.qty}</span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartItems;