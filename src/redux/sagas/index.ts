import { fork } from 'redux-saga/effects'
import tabSaga from './tab'


// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield fork(tabSaga)
}
