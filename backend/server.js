import connectDB from './database/db.js'
import express from 'express'
import colors from 'colors'
import morgan from "morgan";
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import authRoutes from "./routes/authRoute.js";
// import categoryRoutes from "./routes/categoryRoute.js";
// import productRoutes from "./routes/productRoute.js";

const app = express();
dotenv.config();
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.disable('x-powered-by');


//routes
app.use("/api/auth", authRoutes);
// app.use("/api/category", categoryRoutes);
// app.use("/api/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.status(200).json("Welcome to ecommerce app");
});

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
