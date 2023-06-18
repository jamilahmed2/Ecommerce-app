// import connectDB from './db.js'
import express from 'express'
import colors from 'colors'
import morgan from "morgan";
const app = express();
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
// const abcd = require('./routes/abcd');
dotenv.config();

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.disable('x-powered-by');


app.use('/', (req, res) => {
  res.send('<h1>Hello</h1>')
});

// Connect to MongoDB
// connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
