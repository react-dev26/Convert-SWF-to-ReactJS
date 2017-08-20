import { createStore } from 'redux';
import createReducer from './reducer';

export default function configureStore(initialState = {}) {
  const store = createStore(
    createReducer(),
    initialState,
  );

  return store;
}
