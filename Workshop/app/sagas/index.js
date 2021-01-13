import { all } from 'redux-saga/effects'
import * as itunes from './itunes'

export default function* rootSaga() {
    yield all([
        itunes.searchItunesAction()
    ])
}