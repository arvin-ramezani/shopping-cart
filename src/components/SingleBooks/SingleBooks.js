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
    
    const bookList = useSelector(state => state.books.bookList)

    const dispatch = useDispatch();
    
    const param = useParams()    

    const history = useHistory()

    
    useEffect(() => {
        // let [currentBook] = bookList.filter(book => book.id === Number(param.id));
        let [ extractCurrentBook ] = bookList.filter(book => book.id === Number(param.id))
        setCurrentBook(extractCurrentBook)

        // setSingleBook(currentBook)
    },[])


    return (
        <div className="single-books">
            <div className="single-books--flex-box container">
                <div className="single__cover">
                    <div className="single__cover--img">
                        {/* <img src={currentBook.image} alt="Book Image" /> */}
                    </div>
                    <h2 className="single__name">
                        { currentBook.title }
                    </h2>
                    <p className="single__writer">
                        { currentBook.writer }
                    </p>
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
                                <span>از 44 رای</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single__add-to-cart">
                    <button className="single__add-to-cart--button" onClick={() => dispatch(addToCart(currentBook.id))}>افزودن به سبد خرید</button>
                    <button className="single__read-sample" onClick={() => history.push(`/books/${param.id}/excerpt`)}>خواندن گزیده کتاب</button>
                    <Route path={`/books/${param.id}/excerpt`} render={() => <div className="excerpt">downloading excerpt file...</div>} />
                </div>
                <div className="single__excerpt">
                    {currentBook.description}
                </div>
                <div className="single__book-details">
                    <ul>
                        <li>ناشر: <span>لورم ایپسوم</span></li>
                        <li>مترجم: <span>لورم ایپسوم</span></li>
                        <li>قیمت ارزی: <span>$</span></li>
                        <li>نویسنده: <span>{currentBook.writer}</span></li>
                        <li>تاریخ انتشار: <span>{currentBook.publishDate}</span></li>
                        <li>تعداد صفحات: <span>{currentBook.pageCount}</span></li>
                    </ul>
                </div>
                <BookList currentBookId={Number(param.id)} />
            </div>
        </div>
    )
}

export default SingleBooks;