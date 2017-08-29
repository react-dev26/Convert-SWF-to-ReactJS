import dataSagas from 'reducers/sagas';

export default function* rootSaga() {
  yield [
    ...dataSagas,
  ];
}
