const User = require("../models/schema");

const getTask =  async (req, res) => {
 try {
  const {id} = req.params
  const task = await User.findById(id)
  res.status(200).json(task)
 } catch (error) {
  res.status(500).json({msg: error.message});
 }
 };

 const createTask = async (req, res) => {
  try {
   const task = await User.create(req.body)
   res.status(200).json(task)
  } catch (error) {
   res.status(500).json({msg: error.message});
  }
 };

const deleteTask =  async (req, res) => {
 try {
  const {id} = req.params
  const task = await User.findByIdAndDelete(id)
  res.status(200).json(task)
 } catch (error) {
  res.status(500).json({msg: error.message})
 }
};

const updateTask =  async (req, res) => {
 try {
  const {id} = req.params
  const task = await User.findByIdAndUpdate({_id: id}, req.body, {new: true,});
 res.status(200).json(task)
 } catch (error) {
  res.status(500).json({msg: error.message})
 }
};

 module.exports = {

  getTask,

  createTask,

  deleteTask,

  updateTask
 };