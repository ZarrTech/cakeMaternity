require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors");
const auth = require('./middleware/authentication')
const path = require("path");
// async errors handler
require("express-async-errors");


app.use("/images", express.static(path.join(__dirname, "upload")));

const corsOptions = {
  origin: [
    "http://localhost:5173",
  ],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());


app.post('/api/upload',  (req, res) => {
    res.json(req.file)
})


// routers
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);
app.use("/product",  productRouter);
app.use("/category", categoryRouter);

// error Middleware
const { notFound, errorHandler } = require("./middleware");
app.use(notFound)
app.use(errorHandler)



// connect server && run port
const connectDb = require("./db/connect")
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
