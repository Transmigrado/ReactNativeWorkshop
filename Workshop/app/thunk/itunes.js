import { fetchItunes } from '../api/itunes'

export const fetchSearchItunesThunk = searchText => {
    return (dispatch, getState) => { 
        const state = getState()
 
        dispatch({ type: 'FETCH_START' })
        fetchItunes(searchText)
            .then(response => {
                dispatch({ type:'FETCH_SUCCESS', response: response.results})
            })
            .catch(error => {
                dispatch({ type:'FETCH_ERROR', error })
            })
    }
}