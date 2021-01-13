import { takeLatest, call, put } from 'redux-saga/effects'
import { fetchItunes } from '../api/itunes'

function* searchItunes(action){
    try{
  
        const response = yield call(fetchItunes, action.searchText)
        yield put({ type:'FETCH_SUCCESS', response: response.results})
        
    } catch(e) {
        yield put({ type:'FETCH_ERROR'})
    }
}

export function* searchItunesAction(){
    yield takeLatest('FETCH_ITUNES', searchItunes)
}
