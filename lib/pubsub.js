// Defines the server-side collection (and corresponding client cache)
Boards = new Mongo.Collection('boards')

const makeClientServerMethod = ({name, validate, run, runAtClient, runAtServer}) => {
  return new ValidatedMethod({
    name: name,
    validate: validate || (() => {}),
    run: (board) => {
      if (Meteor.isClient && runAtClient) {
        runAtClient(board);
      }
      if (Meteor.isServer && runAtServer) {
        runAtServer(board);
      }
    }
  })
}

var addBoard = makeClientServerMethod({
  name: 'addBoard',
  runAtClient(board) {
    console.log('adding board on client')
    Boards.insert(board)
  },
  runAtServer(board) {
    console.log('adding board on server')
    Meteor.sleep(2500);
    // uncomment to see how client will undo changes
    // throw new Meteor.Error('server add failed')
    Boards.insert(board)
    console.log('done')
  }
})

Meteor.atServer(() => {
  Meteor.publish('boards', () => Boards.find())
})

Meteor.atClient(() => {
  Meteor.subscribe('boards') // records flow into the collection
})

export {addBoard}
