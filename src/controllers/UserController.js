const User = require('../models/User')

async function getUsers(req, res) {
    const users = await User.find()
    return res.status(200).json(users)
}

async function createUser(req, res) {
    const user = req.body
    const newUser = await User.create(user)
    return res.status(201).json(newUser)
}

async function deleteUser(req, res) {
    const id = req.params.id
    await User.findByIdAndDelete({ _id: id })
    return res.status(200).json({ response: 'User deleted' })
}

async function updateUser(req, res) {
    const id = req.params.id
    const updatedUser = await User.findOneAndUpdate({ _id: id }, { name: req.body.name, age: req.body.age })
    return res.status(400).json(updatedUser)
}

module.exports = { createUser, getUsers, deleteUser, updateUser }