import React from 'react';

// import CSS
import './Footernav.css';

function FooterNav() {

    return (
        <div className="footernav">
            <div className="container">
                <ul>
                    <li>
                        <a href="/" className="active">
                            <i className="fa fa-home"></i>
                            خانه
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fas fa-diamond" aria-hidden="true"></i>
                            ویژه
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fa fa-search"></i>
                            جستجو
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fa fa-book"></i>
                            کتابخانه
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterNav;