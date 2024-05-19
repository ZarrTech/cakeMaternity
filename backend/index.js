require('dotenv').config()
const express = require('express')
const app = express()

// async errors handler
require("express-async-errors");

app.use(express.json());

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log(file);
//         cb(null, 'upload')
//     },

//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({storage});

app.post('/api/upload',  (req, res) => {
    res.json(req.file)
})


// routers
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);

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
