// Defines the server-side collection (and corresponding client cache)
Boards = new Mongo.Collection('boards')

const makeClientServerMethod = ({name, validate, run, runAtClient, runAtServer}) => {
  return new ValidatedMethod({
    name: name,
    validate: validate || (() => {}),
    run: (...args) => {
      if (Meteor.isClient && runAtClient) {
        runAtClient(...args);
      }
      if (Meteor.isServer && runAtServer) {
        runAtServer(...args);
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
