import React from 'react';

// import Css
import classes from './BookList.module.css'
import { useSelector } from 'react-redux';
import Card from '../Card/Card';


function BookList(props) {


    const bookList = useSelector(state => state.books.bookList)

    console.log(props.currentBookId)

    return (
        <ul className={classes.bookList}>
            {
                bookList.filter(book => book.id !== props.currentBookId).map((book, index) => {
                    return <Card book={book} key={index} />
                })
            }
        </ul>
    )
}

export default BookList;