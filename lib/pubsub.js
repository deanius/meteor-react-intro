Boards = new Mongo.Collection('boards')

Meteor.atServer(() => {
  Meteor.publish('boards', () => Boards.find())
})

Meteor.atClient(() => {
  Meteor.subscribe('boards') // records flow into the collection
})
