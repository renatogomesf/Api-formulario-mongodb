import express from 'express'
import formRoute from './src/routes/formRoute.js'
import connectDatabse from './src/database/mongodb.js'

const app = express()
const port = process.env.PORT || 3000

connectDatabse()

app.use(express.json())

app.use('/formulario',formRoute)

app.listen(port,()=>{
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})
