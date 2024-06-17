import express from 'express'
import formController from '../controllers/formController.js'

const route = express.Router()

route.get('/cadastros',formController.getAll)

route.get('/consulta',formController.find)

route.post('/cadastrar',formController.post)

export default route