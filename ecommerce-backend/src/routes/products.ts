import  express  from "express";
import { getAdminProducts, getAllCategories, getlatestProducts, newProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
import { adminOnly } from "../middlewares/auth.js";


const app=express.Router();
// Create New Product - /api/v1/product/new
app.post("/new",singleUpload,adminOnly,newProduct);
// Create New Product - /api/v1/product/latest

app.get("/latest",getlatestProducts);
// Create New Product - /api/v1/product/categories

app.get("/categories",getAllCategories);
// Create New Product - /api/v1/product/admin-products

app.get("/admin-products",getAdminProducts);





export default app;