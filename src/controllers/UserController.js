const User = require('../models/User')

async function getUsers(req, res) {
    try {
        const users = await User.find()
        return res.status(200).json(users)        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

async function createUser(req, res) {
    try {
        const user = req.body
        const newUser = await User.create(user)
        return res.status(201).json(newUser)        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

async function deleteUser(req, res) {
    try {
        const id = req.params.id
        await User.findByIdAndDelete({ _id: id })
        return res.status(200).json({ response: 'User deleted' })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

async function updateUser(req, res) {
    try {
        const id = req.params.id
        const updatedUser = await User.findOneAndUpdate({ _id: id }, { name: req.body.name, age: req.body.age })
        return res.status(200).json(updatedUser)        
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

module.exports = { createUser, getUsers, deleteUser, updateUser }