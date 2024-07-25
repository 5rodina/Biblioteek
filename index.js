import express from 'express'
import './Database/db.con.js'
import bookRouter from './modules/book.routes.js'
import authorRouter from './modules/author.routes.js'

const app = express()
const port = 3000

app.use(express.json())

app.use('/book',bookRouter)
app.use('/author',authorRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))