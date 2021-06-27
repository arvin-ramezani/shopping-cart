import { combineReducers } from 'redux';

// import Reducers
import bookList from '../Reducers/books';

// import shopReducer
// import shopReducer from './shopping/shopping-reducer';

const rootReducers = combineReducers({
    books: bookList
});

export default rootReducers;