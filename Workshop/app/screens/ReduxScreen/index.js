import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = state => ({
    count: state.counter.count
})


const mapDispatchToProps = { 
   increment: () => ({ type: 'INCREMENT'}),
   decrement: () => ({ type: 'DECREMENT'})
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)


