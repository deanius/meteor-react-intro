// Defines the server-side collection (and corresponding client cache)
Boards = new Mongo.Collection('boards')

var addBoard = new ValidatedMethod({
  name: 'addBoard',
  validate(args) {},
  run(board) {
    console.log('addBoard is running')
    Boards.insert(board);
  }
})

Meteor.atServer(() => {
  Meteor.publish('boards', () => Boards.find())
})

Meteor.atClient(() => {
  window.addBoard = addBoard;
  Meteor.subscribe('boards') // records flow into the collection
})

export {addBoard}
