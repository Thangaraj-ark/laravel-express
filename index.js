const express = require('express')
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() =>console.log('connected'))
.catch(error => console.log(error));

const productSchema = new mongoose.Schema({ 
    name: string,
    price: number,
    description: string,
    imageUrl : string
});

const product = mongoose.model('products', productSchema);
const port = 3001

app.get('/products', (req, res) => {
  res.send('Hello World!')
})

app.get('/product/:id', (req, res) => {
  res.send('Hello World!')
})

app.post('/product', (req, res) => {
  res.send('Got a POST request')
})

app.put('/product/:id', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/product/:id', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})