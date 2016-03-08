import React from 'react'
import {movePiece} from '../../lib/chess.js'
import {addBoard} from '../../lib/pubsub.js'

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
        addBoard.call(movePiece(currentBoard, source, target))
      }
    })
  },
  componentDidUpdate() {
    let currentBoard = this.props.board;
    // be naughty and mutate the DOM after React
    ChessBoard(containerId, {
      draggable: true,
      position: currentBoard,
      onDrop: function(source, target) {
        addBoard.call(movePiece(currentBoard, source, target))
      }
    })
  },
  render() {
    return (
      <div id={containerId}></div>
    )
  }
})
