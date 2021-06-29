import React, { useEffect } from 'react';

// import CSS
import './Main.css';

// import Components
import Card from '../Card/Card';

// import Banner Image
import Banner from '../../images/banner/mobileBanner.jpg';

// import react-redux
import { useDispatch, useSelector } from 'react-redux';

// import Actions
import { initialBooks } from '../../Actions/books';

// import Axios
import axios from 'axios';
import { useState } from 'react';

function Main() {

    let writerCounter = 1;


    const [loading, setLoading] = useState(true);

    const bookList = useSelector(state => state.books.bookList)

    const dispatch = useDispatch();


    let responseHandler = (data) => {

        // const initializeBookList = data.slice(0, 10).map(book => {
        
        const initializeBookList = data.slice(0, 50).map(book => {
          return {
              ...book,
              writer: `writer ${writerCounter++}`,
              image: `http://covers.openlibrary.org/b/id/2407${writerCounter}7-S.jpg`,
              price: writerCounter * 10
            }
        })
        dispatch(initialBooks(initializeBookList))
        setLoading(false)
    }
  
    useEffect(() => {
      axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
      .then(Response => responseHandler(Response.data))
      .catch(err => console.log(err))
  
    },[])
  

    return (
        <>
            <div className="main__banner">
                <img src={Banner} alt="banner" />
            </div>
            <div className="main__suggests">
                <div className="container">
                    <h3 className="main__suggests--title">
                        پیشنهادات برای شما
                    </h3>
                    <div className="main__suggests--container">
                        <ul className="main__suggests--list">
                            {
                                loading 
                                ? <div className="main__suggests--list">
                                    <i class="fas fa-spinner fa-pulse"></i>
                                    <a target="_blank" href="https://fakerestapi.azurewebsites.net/index.html">به علت استفاده از فیلتر شکن، <abbr title="FakeRESTApi.web">API</abbr> با تاخیر زیادی دریافت می شود...</a>
                                    <span>و حتی بعضی وقت ها 2 دقیقه طول میکشد تا لیست کتاب ها را نمایش دهد </span>
                                </div>
                                : bookList.map((book, index) => <Card book={book} key={index} />)
                            }       
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;