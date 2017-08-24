import { put, call, takeLatest } from 'redux-saga/effects';
import Data from '../data';
import {
  LOAD_DATA,
} from '../constants';

import {
  loadData,
} from './api';

import {
  setProduct,
} from '../actions';

function* asyncLoadData() {
  yield put(setProduct(Data));
}

export function* getData() {
  yield takeLatest(LOAD_DATA, asyncLoadData);
}

export default [
  getData(),
];
