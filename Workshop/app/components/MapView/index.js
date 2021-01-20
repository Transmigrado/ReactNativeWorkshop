import PropTypes from 'prop-types'
import React from 'react'
import { requireNativeComponent } from 'react-native'

class MapView extends React.Component {
  render() {
    return <RNTMap {...this.props} />
  }
}

MapView.propTypes = {
  zoomEnabled: PropTypes.bool
}

var RNTMap = requireNativeComponent('RNTMap', MapView)

module.exports = MapView