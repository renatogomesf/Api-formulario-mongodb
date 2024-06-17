import express from 'express'
import formController from '../controllers/formController.js'

const route = express.Router()

route.get('/cadastro',formController.getAll)

route.post('/cadastro',formController.post)

export default route