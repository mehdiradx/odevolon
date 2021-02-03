import {put, takeLatest} from 'redux-saga/effects';
import Request from '../../helpers/Request';
import {CATEGORIES_API} from '../../constants/apis';

const LOAD = 'odelovon/categories/LOAD';
const LOAD_SUCCESS = 'odelovon/categories/LOAD_SUCCESS';
const LOAD_FAIL = 'odelovon/categories/LOAD_FAIL';
const ACTIVE_CATEGORY = 'odelovon/categories/ACTIVE_CATEGORY';

const initialState = {
  loading: false,
  categories: [],
  activeCategory: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        loading: false,
      };
    case LOAD_FAIL:
      return {
        ...state,
        categories: [],
        loading: false,
      };
    case ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.itemId,
      };
    default:
      return state;
  }
}

const load = () => ({
  type: LOAD,
});

const loadSuccess = ({categories}) => ({
  type: LOAD_SUCCESS,
  categories,
});

const loadFail = () => ({
  type: LOAD_FAIL,
});

const setActiveCategory = ({itemId}) => ({
  type: ACTIVE_CATEGORY,
  itemId,
});

function* watchLoad() {
  try {
    const categories = yield Request.get(CATEGORIES_API);

    yield put(loadSuccess({categories}));
  } catch (error) {
    yield put(loadFail());
  }
}

const saga = () => [takeLatest(LOAD, watchLoad)];

export default reducer;

export {saga, load, setActiveCategory};
