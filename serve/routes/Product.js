const express = require('express')
const products = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Product = require('../models/Product')
products.use(cors())

process.env.SECRET_KEY = 'secret'

products.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  Prod.findOne({email: req.body.email}).then(user => {
      if (!user) {
        User.create(userData)
          .then(user => {
            const payload = {
              _id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

products.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        const payload = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ token: token })
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

products.delete('/product', (req, res) => {
  Product.deleteOne({ id: req.body.id }, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion");
  });
})


products.update('/product', (req, res) => {
  var query = {'username': req.user.username};
  req.newData.username = req.user.username;

  MyModel.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
      if (err) return res.send(500, {error: err});
      return res.send('Succesfully saved.');
  });
})

products.get('/product', (req, res) => {
  Product.find({}).then(product => {
      if (product) {
        res.json(product)
      } else {
        res.send('This Product does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = products