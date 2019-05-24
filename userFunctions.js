let users = require('./users.json')

let allUsers = (req, res) => res.send(users)

//   console.log(1111111111111, allUsers())

  let getUserById = (req, res) => {
      let {id} = req.params
      let user = users.find( user => +user.id === +id)
      res.send(user)
      
  }

// console.log(22222222222, getUserById(5))

let getUserByEmail = (req, res) => {
    console.log(req.query)
    let {email} = req.query
    let user = users.find( user => (user.email) === (email))
    console.log(user)
    res.send(user)
}

module.exports = {
    allUsers,
    getUserById,
    getUserByEmail
}

let url = 'http://localhots:5000/api/user?email=ddakin1@google.com'