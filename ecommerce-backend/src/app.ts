import express from 'express'



// Importing Routes
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
import NodeCache from 'node-cache';
import{config} from "dotenv"
import morgon from "morgan"

import userRoute from './routes/user.js'
import productRoute from './routes/products.js'
import orderRoute from './routes/order.js'
 

config({
    path:"./.env",
})
const port=process.env.PORT||4000;

const mogoURI=process.env.MONGO_URI||""
connectDB(mogoURI);

export const myCache =new NodeCache(); 

const app=express();
app.use(express.json());// using middleware 
app.use(morgon("dev"));

app.get("/",(req,res)=>{
    res.send("API Working with /api/v1");
});

// Using Routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/product",productRoute);
app.use("/api/v1/order",orderRoute);


app.use("/uploads",express.static("uploads"));
app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`Server is working on   http://localhost:${port}`);
})