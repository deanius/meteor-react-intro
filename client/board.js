import ReactChessBoard from './board.jsx'

// Defines the client-side collection to cache subscription data
Boards = new Mongo.Collection('boards')
Meteor.subscribe('boards')

Template.board.helpers({
  ReactChessBoard() { return ReactChessBoard },
  boardData() {
    var board = _.last(Boards.find().fetch())
    return board && board.pieces
  }
})
