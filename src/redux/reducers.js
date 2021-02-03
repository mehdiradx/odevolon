import {combineReducers} from 'redux';

import categories from './modules/categories';
import images from './modules/images';

const reducers = {
  categories,
  images,
};

export default combineReducers(reducers);
