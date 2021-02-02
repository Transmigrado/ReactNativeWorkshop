import { connect } from 'react-redux'
import Component from './Component'
import { fetchFromRealm, addToRealm } from '../../thunk/realm'

const mapStateToProps = state => ({
    people: state.people.list
})

const mapDispatchToProps = { 
    fetch: fetchFromRealm,
    add: addToRealm
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)