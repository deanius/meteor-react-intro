// Defines the server-side collection (and corresponding client cache)
Boards = new Mongo.Collection('boards')

Meteor.atServer(() => {
  Meteor.publish('boards', () => Boards.find())

  Meteor.methods({
    addBoard(board) {
      Boards.insert(board);
    }
  })
})

Meteor.atClient(() => {
  Meteor.subscribe('boards') // records flow into the collection
})
