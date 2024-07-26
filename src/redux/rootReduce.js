import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import GablinReducer from './GablinReducer';

const rootReducer = combineReducers({
    stateProduct: ProductReducer,
    stateGablin: GablinReducer
})

export default rootReducer;