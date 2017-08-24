import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [
    sagaMiddleware,
  ];
  const store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(...middlewares),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
