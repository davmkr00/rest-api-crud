const express = require("express");
const app = express();

// app.use( (req, res, next) => {
//     res.status(200).json({
//         message: "server stated"
//     });
// });

const productRoutes = require('./src/rest-api/routes/products');
app.use("/products", productRoutes);

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