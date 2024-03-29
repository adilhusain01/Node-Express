//we send application json data
//server side rendering

//map method

const express = require("express");
const { products } = require("./public/data");

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1><a href="/api/products">Click here</a>`);
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })
    res.json(newProducts);
})


app.listen(8000, () => {
    console.log("Server running on port 8000");
})