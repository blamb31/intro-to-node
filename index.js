// let userFns = require('./userFunctions')

// console.log(userFns.getUserById(5))

const express = require('express')

const {allUsers, 
    getUserByEmail, 
    getUserById} = require('./userFunctions')

const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/api/users', allUsers )

app.get('/api/users/:id', getUserById )

app.get('/api/useremail', getUserByEmail )


app.listen(port, () => {
    console.log(`listening on port ${port}`)
} )