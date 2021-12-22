import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import routes from './routes.js'

mongoose.connect('mongodb://localhost:27017/sewa-kosan', {
    useNewUrlParser: true, 
})

const connection = mongoose.connection
connection.on('error', (e) => console.log(e))
connection.once('open', () => console.log("Berhasil connect database"))

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', routes)

app.listen('3000', () => console.log("Berhasil menjalankan server di port 3000"))