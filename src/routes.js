const { Router } = require('express')
const { getUsers, createUser, deleteUser, updateUser } = require('./controllers/UserController')

const routes = Router()

routes.get('/users', getUsers)
routes.post('/users', createUser)
routes.delete('/users/:id', deleteUser)
routes.patch('/users/:id', updateUser)

module.exports = routes