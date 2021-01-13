import { connect } from 'react-redux'
import Component from './Component'
import { fetchSearchItunesThunk } from '../../thunk/itunes'

const mapStateToProps = state => ({
  tracks: state.itunes.tracks,
  isLoading: state.itunes.isLoading
})


/*
const mapDispatchToProps = { 
    searchItunes: searchText => ({ type: 'FETCH_ITUNES', searchText}),
}
*/

const mapDispatchToProps = { 
    searchItunes: fetchSearchItunesThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)


