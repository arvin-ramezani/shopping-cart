import React, { useEffect, useState } from 'react';


// import CSS
import './SingleBooks.css';


// import Components
import BookList from '../BookList/BookList';

// import react-redux
import { useDispatch, useSelector } from 'react-redux';

// import react-router
import { Route, useHistory, useParams } from 'react-router';

// import Actions
import { addToCart } from '../../redux/shopping/shopping-actions';

function SingleBooks(props) {

    // const [singleBook, setSingleBook] = useState('')

    const [currentBook, setCurrentBook] = useState('')

    const [showExcerpt, setShowExcerpt] = useState()

    const param = useParams()    
    
    const [storeBookList] = useSelector(state => state.books.bookList.filter(book => book.id === Number(param.id)))

    const dispatch = useDispatch();
    

    const history = useHistory()

    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    },[props])


    return (
        <div className="single-books">
            <div className="single-books--flex-box container">
                <div className="single__cover">
                    <div className="single__cover--img">
                        <img src={storeBookList.image} alt="Book Image" />
                    </div>
                    <div className="single__name-block">
                        <h2 className="single__name">
                            { storeBookList.title }
                        </h2>
                        <p className="single__writer">
                            { storeBookList.writer }
                        </p>
                    </div>
                    <div className="single__save-block">
                        <div className="single__save--button">
                            <i className="fas fa-bookmark"></i>
                        </div>
                        <div className="single__rate">
                            <div className="single__rate--icon">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="single__rate--text">
                                <span>???? 44 ??????</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single__add-to-cart">
                    <button className="single__add-to-cart--button" onClick={() => dispatch(addToCart(storeBookList.id, storeBookList.price))}>???????????? ???? ?????? ????????</button>
                    <button className="single__read-sample" onClick={() => history.push(`/books/${param.id}/excerpt`)}>???????????? ?????????? ????????</button>
                    <Route path={`/books/${param.id}/excerpt`} render={() => <div className="excerpt">downloading excerpt file...</div>} />
                </div>
                <div className="single__excerpt content__width">
                    <p>
                        {storeBookList.description}
                    </p>
                </div>
                <div className="single__book-details content__width">
                    <ul>
                        <li>????????: <span>???????? ????????????</span></li>
                        <li>??????????: <span>???????? ????????????</span></li>
                        <li>???????? ????????: <span>{storeBookList.price} $</span></li>
                        <li>??????????????: <span>{storeBookList.writer}</span></li>
                        <li>?????????? ????????????: <span>{storeBookList.publishDate}</span></li>
                        <li>?????????? ??????????: <span>{storeBookList.pageCount}</span></li>
                    </ul>
                </div>
                <BookList currentBookId={Number(param.id)} />
            </div>
        </div>
    )
}

export default SingleBooks;