import express from 'express'
import formController from '../controllers/formController.js'

const route = express.Router()

route.get('/ligar-servidor',formController.ligarServidor)

route.get('/cadastros',formController.getAll)

route.post('/consulta',formController.find)

route.post('/cadastrar',formController.post)

route.patch('/atualizar/:id',formController.patch)

route.delete('/deletar/:id',formController.delete)

export default route
