Boards = new Mongo.Collection('boards')

Meteor.atServer(() => {
  Meteor.publish('boards', () => Boards.find())
  Boards.allow({insert: () => true})
})

Meteor.atClient(() => {
  Meteor.subscribe('boards') // records flow into the collection
})
