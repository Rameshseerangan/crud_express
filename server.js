import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from './Routters/ProductRouter.js'


dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to our API"); // Correct parameter order
});


//custome route

app.use('/api/product',ProductRoute);


//default middleware for req for body

app.use(express.json());

const port = process.env.PORT || 5000;

app.use(cors({}));

app.listen(port, () => {
  console.log("server started ");
});
