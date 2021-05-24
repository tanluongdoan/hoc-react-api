import {combineReducers} from 'redux';
import itemEditing from './itemEditing';
import products from './products'
const appReducers =combineReducers ({
    products :products,
    itemEditing
});
export default appReducers;