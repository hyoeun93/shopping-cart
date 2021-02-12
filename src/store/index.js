import { createStore } from 'redux';
import listReducer from '../reducer/index';

const store = createStore(listReducer);

export default store;
