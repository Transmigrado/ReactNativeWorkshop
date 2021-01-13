import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = state => ({
  tracks: state.itunes.tracks,
  isLoading: state.itunes.isLoading
})


const fetchItunes = term => {
    return fetch(`https://itunes.apple.com/search?term=${term}`)
                .then(response => response.json())
}

/*
const mapDispatchToProps = { 
    searchItunes: searchText => ({ type: 'FETCH_ITUNES', searchText}),
}
*/

const mapDispatchToProps = { 
    searchItunes: searchText => {
        return (dispatch) => { 
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)


