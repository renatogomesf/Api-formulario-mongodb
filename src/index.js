import express from 'express'
import cors from 'cors'
import formRoute from './routes/formRoute.js'
import connectDatabse from './database/mongodb.js'

const app = express()
const port = process.env.PORT || 3000

connectDatabse()

app.use(express.json())
app.use(cors())

app.use('/formulario',formRoute)

app.listen(port,()=>{
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})
