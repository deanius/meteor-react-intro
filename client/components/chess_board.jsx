import React from 'react'
import ChessBoardJS from 'chessboardjs'

const containerId = 'chessboardjs-div'

export default React.createClass({
  componentDidUpdate() {
    // be naughty and mutate the DOM after React
    ChessBoardJS(containerId, {
      draggable: true,
      position: this.props.board
    })
  },
  render() {
    return (
      <div id={containerId}></div>
    )
  }
})
