// References/creates the server-side collection
Boards = new Mongo.Collection('boards')

Meteor.publish('boards', () => Boards.find())
Boards.allow({insert: () => true})
