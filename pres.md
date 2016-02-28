Build a Realtime Game over WebSockets

10 minute version (target 750 written words (1500 spoken), 10 slides/20 states)

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

Static+Firebase (Vanilla)
  demo
  http://jsbin.com/hipile/2

Static+Firebase (React)
  demo
  http://jsbin.com/hipile/3

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

-----------

Elaboration Possibilities

Optimistic UI
  - Use Meteor Methods to do Optimistic UI (cancel if: opponent already made move? King actually taken?)

Vs. RxJS
  - Declare a variable to represent a changing value (Rx.Subject)
  - Require certain 'Reactive contexts' like helpers to 'run your function again'
  -
