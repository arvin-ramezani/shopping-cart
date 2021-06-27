// import Reducers
// import books from '../Reducers/books';
import rootReducers from '../redux/rootReducer';


// import redux
import { createStore } from 'redux'

// import redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducers, composeWithDevTools());

export default store;