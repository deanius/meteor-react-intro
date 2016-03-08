import React from 'react'
import {movePiece} from '../../lib/chess.js'

// depends on jQuery, can only be used on client
import ChessBoard from 'chessboardjs'
const containerId = 'chessboardjs-div'

export default React.createClass({
  componentDidMount() {
    let currentBoard = this.props.board;
    // be naughty and mutate the DOM after React
    ChessBoard(containerId, {
      draggable: true,
      position: currentBoard,
      onDrop: function(source, target) {
        Meteor.call('addBoard', movePiece(currentBoard, source, target))
      }
    })
  },
  render() {
    return (
      <div id={containerId}></div>
    )
  }
})
