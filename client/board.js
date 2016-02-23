import ChessBoard from './components/chess_board.jsx'

Template.board.helpers({
  ChessBoard() { return ChessBoard },
  boardData() {
    return Boards.find()
  }
})
