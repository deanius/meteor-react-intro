import {initialBoard} from '../lib/chess.js'

if (Boards.find().count() === 0) {
  Boards.insert(initialBoard)
}
