import { connect } from 'react-redux'
import Component from './Component'
import { fetchSearchItunesThunk } from '../../thunk/itunes'
import { getIsLoading, getTracks } from '../../getters/itunes'

const mapStateToProps = state => ({
  tracks: getTracks(state),
  isLoading: getIsLoading(state)
})

const mapDispatchToProps = { 
    searchItunes: fetchSearchItunesThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)


