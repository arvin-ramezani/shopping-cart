import React from 'react';

// import Css
import classes from './BookList.module.css'

// import react-redux
import { useSelector } from 'react-redux';

// import Components
import Card from '../Card/Card';

// import react-router
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'


function BookList(props) {

    const history = useHistory()


    const bookList = useSelector(state => state.books.bookList)

    console.log(props.currentBookId)

    return (
            <>
                <div className={classes.bookList__title}>
                    <h3 className="" onClick={() => history.push('/books')}>
                        پیشنهادات برای شما:
                    </h3>
                    <Link to="/books">مشاهده همه</Link>
                </div>
                <ul className={classes.bookList}>
                    {
                        bookList.map((book, index) => book.id === props.currentBookId ? null : <Card book={book} key={index} />)
                    }
                </ul>
            </>
    )
}

export default BookList;