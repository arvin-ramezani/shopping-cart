import React, { useEffect, useState } from 'react';

// import Components
import Card from '../Card/Card';

// import CSS
import './AllBooks.css';

// import Axios
import axios from 'axios';
import { useSelector } from 'react-redux';

function AllBooks() {

    const [allBooks, setAllBooks] = useState([]);

    const bookList = useSelector(state => state.books.bookList)

    let responseHandler = data => setAllBooks(data)

    // console.log(books.img)

    // useEffect(() => {
    //     axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
    //     .then((Response) => responseHandler(Response.data))
    //     .catch(err => console.log(err))
    // },[])
    
    return (
        <div className="all-books__container">
            {
                bookList.length < 1 ? 
                    <div className="all-books__loading">
                          <i class="fas fa-spinner fa-pulse fa-2x"></i>
                    </div>
                    : null
            }
            <ul>
                {
                    bookList.map((book, index) => <Card book={book} key={index} />)
                }
            </ul>
        </div>
    )
}

export default AllBooks;