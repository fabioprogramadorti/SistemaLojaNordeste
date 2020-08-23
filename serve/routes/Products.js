const express = require('express')
const products = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Product = require('../models/Product')
products.use(cors())

process.env.SECRET_KEY = 'secret'

products.post('/register', (req, res) => {
  const today = new Date()
  const productData = {
    name: req.body.name,
    price: req.body.price,
    quantities: req.body.quantities,
    created: today
  }

  

  Product.findOne({name: req.body.name}).then(product => {
      if (!product) {
        console.log(productData);
        Product.create(productData)
          .then(product => {            
            const payload = {
              _id: product._id,
              name: product.first_name,
              price: product.last_name,
              quantities: product.quantities
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
        res.json({ error: 'Product already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


products.get('/list', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Product.find().then(product => {
      if (product) {
        res.json(product)
      } else {
        res.send('Produto não existe')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = products