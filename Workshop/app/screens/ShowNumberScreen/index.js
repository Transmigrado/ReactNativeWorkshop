import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = state => ({
    count: state.counter.count
})

export default connect(mapStateToProps)(Component)


