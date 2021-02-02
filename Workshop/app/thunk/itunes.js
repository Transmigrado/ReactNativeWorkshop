import { fetchItunes } from '../api/itunes'

export const fetchSearchItunesThunk = searchText => {
    return (dispatch) => { 
   
        dispatch({ type: 'FETCH_START' })
        return fetchItunes(searchText)
            .then(response => {
                dispatch({ type:'FETCH_SUCCESS', response: response.results})
            })
            .catch(error => {
                dispatch({ type:'FETCH_ERROR', error })
            })
    }
}