import ChessBoard from './components/chess_board.jsx'

Template.board.helpers({
  ChessBoard() { return ChessBoard },
  boardData() {
    var board = _.last(Boards.find().fetch())
    return board && board.pieces
  }
})
