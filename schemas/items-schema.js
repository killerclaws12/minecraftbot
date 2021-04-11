const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}
const num0 = {
  type: Number,
  required: true,
  default: 0
}

const itemsSchema = mongoose.Schema({
  guildId: reqString,
  userId: reqString,
  diamonds: num0,
  emeralds: num0,
  stone: num0,
  birchwood: num0,
  oakwood: num0,
  sprucewood: num0,
  junglewood: num0,
  acaciawood: num0,
  gravel: num0,
  grass: num0,
  dirt: num0,
  wheat: num0,
  carrot: num0,
  potato: num0,
  kaelly: num0,
})

module.exports = mongoose.model('items', itemsSchema)
