import {put, takeLatest, select} from 'redux-saga/effects';
import Request from '../../helpers/Request';
import {SEARCH_IMAGES_API} from '../../constants/apis';

const LOAD = 'odelovon/images/LOAD';
const LOAD_SUCCESS = 'odelovon/images/LOAD_SUCCESS';
const LOAD_FAIL = 'odelovon/images/LOAD_FAIL';

const initialState = {
  loaded: false,
  loading: false,
  page: 0,
  data: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
      };

    case LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        page: action.page,
        data: action.append ? [...state.data, ...action.data] : action.data,
      };

    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

function load({append = false, itemId}) {
  return {
    type: LOAD,
    append,
    itemId,
  };
}

function loadSuccess({data, append, page}) {
  return {
    type: LOAD_SUCCESS,
    data,
    append,
    page,
  };
}

function loadFail() {
  return {
    type: LOAD_FAIL,
  };
}

function* watchLoad({append, itemId = 1}) {
  try {
    const currentPage = yield select((state) => state.images.page);
    const response = yield Request.get(
      `${SEARCH_IMAGES_API}?limit=10&category_ids=${itemId}&page=${
        append ? currentPage + 1 : 1
      }`,
    );
    yield put(
      loadSuccess({
        data: response,
        append,
        page: currentPage + 1,
      }),
    );
  } catch (error) {
    yield put(loadFail(error));
  }
}

const saga = () => [takeLatest(LOAD, watchLoad)];

export {saga, load};

export default reducer;
