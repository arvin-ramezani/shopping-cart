import React, { useEffect, useState } from 'react';

// import CSS
import './Header.css';

// import Brand Image
import brandImage from '../../images/fidibo-bg-g-min.jpg';

// import react-router-dom
import { Link, NavLink } from 'react-router-dom';

// import react-redux
import { useSelector } from 'react-redux';

function Header(props) {

    const [cartCount, setCartCount] = useState(0);

    const cartList = useSelector(state => state.books.cart)

    useEffect(() => {
        let count = 0;
        // console.log(count)
        cartList.forEach(item => {
            // console.log(item.qty)
            return count += Number(item.qty)
        })

        setCartCount(count)

    },[cartCount, cartList])

    return (
        <header>
            <div className="header container">
                <div className="header__top">
                    <div className="header__profile">
                        <i className="fa fa-user"></i>
                        <span className="header__profile--text">پروفایل</span>
                    </div>
                    <div className="header__brand">
                        <img src={brandImage} alt="Fidibo" />
                    </div>
                    <Link className="header__cart--link" to="/shoppingCart">
                        <div className="header__cart">
                            <span className="header__cart--text">سبدخرید</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span id="cart-count">{cartCount}</span>
                        </div>
                    </Link>
                </div>
                <nav className="header__navigation">
                    <ul>
                        <li>
                            {/* <a href="/" className="active">همه</a> */}
                            <NavLink to="/" exact activeClassName="active">خانه</NavLink>
                        </li>
                        <li>
                            {/* <a href="/">کتاب</a> */}
                            <NavLink to="/books">کتاب</NavLink>
                        </li>
                        <li>
                            <a href="/">کتاب صوتی</a>
                        </li>
                        <li>
                            <a href="/">پادکست</a>
                        </li>
                        <li>
                            <a href="/">مجله</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;