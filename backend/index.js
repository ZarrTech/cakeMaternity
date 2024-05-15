require('dotenv').config()
const express = require('express')
const app = express()

// async errors handler
require("express-async-errors");

app.use(express.json());

app.get('/', (req, res) => {
    res.json('hello Mum')
})

// routers
const productRouter = require("./routes/product");
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);
app.use("/product-category", productRouter);

// error Middleware
const { notFound, errorHandler } = require("./middleware");
app.use(notFound)
app.use(errorHandler)



// connect server && run port
const connectDb = require("./db/connect");
const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URL);
        app.listen(port, () => {
          console.log("server running")
        }); 
    } catch (error) {
        console.log(error);
    }
   
}
start()
