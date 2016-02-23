Build a Realtime Game over WebSockets

Prereqs
- Chessboard.js
  - jQuery dependency
  - library (cdn, npm)
  - stylesheet
  - images

- container div in document
- JS call to take over the container div

Starter JSBin
  http://jsbin.com/hipile/1

Static+Firebase
  demo
  http://jsbin.com/hipile/2

Hosted Meteor/Mongo
  https://chessboardjs.meteor.com

Comparison
Static+Firebase
  - loading: loads over web
  - referencing: global namespaces
  - state: persisted in the DOM
  - subscription: notification of messages

Hosted Meteor
  - loading: loads via npm (or web)
  - referencing: ES6 import/export (or globals)
  - state: persisted in local cache (Mini-Mongo)
  - subscription: Reactively over the collection (or message-based)


Reactive Programming
  - Similar model as React (RxJS, Bacon, etc..)
  - "The latest record in my local cache"
