import {all} from 'redux-saga/effects';
import {saga as categoriesSaga} from './modules/categories';
import {saga as imagesSaga} from './modules/images';

export default function* rootSaga() {
  yield all([...categoriesSaga(), ...imagesSaga()]);
}
