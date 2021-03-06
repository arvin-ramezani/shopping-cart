import React, { useEffect } from 'react';

// import CSS
import './App.css';

// import Components
import Header from './components/Header/Header';
import FooterNav from './components/Footernav/FooterNav';

// import Routes
import Main from './components/Main/Main';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';


// import react-redux
import { useDispatch } from 'react-redux';

// import Actions
import SingleBooks from './components/SingleBooks/SingleBooks';

// import react-router-dom
import { Route, Switch } from 'react-router';
import AllBooks from './components/AllBooks/AllBooks';





function App() {

  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/shoppingCart" component={ShoppingCart} />
          <Route path="/books/:id" component={SingleBooks} />
          <Route path="/books" component={AllBooks} />
      </Switch>
      <FooterNav />
  </div>

  );
}

export default App;
