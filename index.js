const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

const userRouter = require("./routes/users.js");
app.use('/users', userRouter);

const productRouter = require("./routes/products.js");
app.use('/products', productRouter);

app.listen(3000, () => {
    console.log("Express demo app listening on port 3000");
});