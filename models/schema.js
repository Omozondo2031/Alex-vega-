const mongoose = require ('mongoose');

const priceSchema = mongoose.Schema({
 name:{
  type:String,
  require:true
 },
 details:{
  type:String,
  require:true
 },
 price:{
  type:String, 
  require:true
 },
 createdAt:{
 type:Date,
 default:Date.now
 },
});

const User = mongoose.model('User', priceSchema)
module.exports = User