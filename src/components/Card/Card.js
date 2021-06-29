import React, { useState }  from 'react';

// import CSS
import './Card.css';

// import react-router-dom
import { Link } from 'react-router-dom';

// import react-redux
import { useDispatch } from 'react-redux';

// import Actions
import {addToCart} from '../../redux/shopping/shopping-actions';

function Card (props) {

        let book = props.book;


    const [name] = useState(book.title);

    const [description] = useState(book.description.slice(0, 30));

    const [writer] = useState(book.writer);

    const [isAddToCart, setIsAddToCard] = useState();

    const dispatch = useDispatch();

    let addToCartHandler = () => {

        dispatch(addToCart(book.id, book.price))
    }
    

    return (
        <li>
            <div className="card__body">
                <Link to={`/books/${book.id}`}>
                    <div className="card__img">
                        <img src={book.image} alt="cover" />
                    </div>
                    <div className="card__name">{name}</div>
                    {/* <div className="card__description">
                        {description}
                    </div> */}
                    <div className="card__writer">{writer}</div>
                </Link>
                <div className="card__rate">
                    <p className="card__rate--text">از 38 رای</p>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <div className="card__add-to-cart">
                    <button onClick={(e) => addToCartHandler(e)}>افزودن به سبد خرید</button>
                </div>
            </div>
        </li>
    )
}

export default Card;