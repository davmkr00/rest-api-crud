const express = require("express");
const productRoutes = require('./src/rest-api/routes/products');
const orderRoutes = require('./src/rest-api/routes/orders')


const app = express();


app.use("/products", productRoutes);
app.use("/orders", orderRoutes)

app.use( (req, res, next) => {
    const error = new Error('Request Not Found...')
    error.status = 404;
    next(error); 
});

app.use((error, req, res, next) => {
    res.status(error.status || 405)
    res.send({
        error: error.message
    })
})


module.exports = app;