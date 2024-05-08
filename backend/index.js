const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const movies = require('./routes/movies.route.js')
const rentals = require('./routes/rentals.route.js')
const users = require('./routes/users.route.js')
app.use(cors())
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/movies', movies)
app.use('/rentals', rentals)
app.use('/users', users)


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
