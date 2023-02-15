const { request } = require('express')
const express = require('express')
require('./db/config')
const cors = require("cors")//npm package to remove cors error
const User = require('./db/User')
const Product = require('./db/Product')
const app = express()
const port = 5000
app.use(express.json())// used to control data sent from postman (always necessary)
app.use(cors())//middleware to resolve cors issue

const Jwt = require('jsonwebtoken')
const jwtKey = 'e-comm';

app.post('/register', async function (req, res) {
  let user = await new User(req.body); // jo frontend se data aa rha hai wo nye user me store ho rha hai
  let result = await user.save();// data mongodb ke user table me store ho rha hai
  // we cant use .select to remove password because the user is being created here we are selecting it 
  result = result.toObject() // converting to object
  delete result.password // deletes/hides password as it is good practice
  console.log(req.body);
  res.send(result);
})

app.post('/login', async function (req, res) {
  console.log(req.body);// jo input aaya hai usko dikhao
  if (req.body.password && req.body.email) { // agar input me email aur password aayi hai tabhi hi chale warna na chale 
    let exisUser = await User.findOne(req.body).select("-password") //dekho ki existing user hai ki nhi aur usme se password hatadoo 
    if (exisUser) {  // agar user mila to chalao
      res.send(exisUser)
    } else {// nhi to likhdo no user found
      res.send("Result not found")
    }
  } else {// email ya password me se koi ek cheez ya dono nhi daale
    res.send("Result not found")
  }

})

app.post('/add-product', async function (req, res) {
  let product = await new Product(req.body); // jo frontend se data aa rha hai wo nye product me store ho rha hai
  let resultttt = await product.save();// data mongodb ke Product table me store ho rha hai
  res.send(req.body);
})

app.get('/products', async (req, res) => {

  let products = await Product.find(); // saare products aajaenge to product table me hai jase hi api load hoga
  if (products.length > 0) { // agar products table empty nhi hai to chalao
    res.send(products); // products list send kardo
  } else { // agar products table empty hai
    res.send("no products found"); //ye message bhejdo 
  }
})

app.delete('/products/:id', async function (req, res) { // id product id hai jo unique hogi wo delete hogi 
  const result7 = await Product.deleteOne({ _id: req.params.id })//Product table me se wo product delete karo jiski _id, req.params.id ke equal hogi (params wo id hogi jo input me pass ki hai )
  res.send(result7);
});

// api to get single product
app.get('/products/:id', async (req, res) => {

  let result8 = await Product.findOne({ _id: req.params.id })// getting the product by comparing its id given in parameters with any id in the collection
  if (result8) { // agar product mila to chalao
    res.send(result8)
  } else { // agar user nhi mila to chalao
    res.send("no result found")
  }
})

app.put('/products/:id', async function (req, res) { // put methd is used to update a function
  let result10 = await Product.updateOne(
    { _id: req.params.id },// jiske basis pe update karani hai
    { $set: req.body }// jo update karani hai (ratlo)
  )
  res.send(result10) // ye karna zaruri hai put function ke saath 
});


// api for search (RATLO)
app.get('/search/:key', async (req, res) => {
  let result12 = await Product.find({
    "$or": [
      { name: { $regex: req.params.key } },// name ko search karne ke liye
      { company: { $regex: req.params.key } }, // company ko search karne ke liye
      { category: { $regex: req.params.key } } // category ko search karne ke liye
    ]
  });
  res.send(result12);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



