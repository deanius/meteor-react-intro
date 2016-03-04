import React from 'react'
import {movePiece} from '../lib/chess.js'

// depends on jQuery, can only be used on client
import ChessBoardJS from 'chessboardjs'
const containerId = 'chessboardjs-div'

export default React.createClass({
  componentDidMount() {
    let currentBoard = this.props.board;
    // be naughty and mutate the DOM after React
    ChessBoardJS(containerId, {
      draggable: true,
      position: currentBoard,
      onDrop: function(source, target) {
        let newBoard = movePiece(currentBoard, source, target)
        // optimistically update the local collection, let Meteor sync it
        Boards.insert(newBoard)
      }
    })
  },
  render() {
    return (
      <div id={containerId}></div>
    )
  }
})
