import  express  from "express";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getSingleProduct, getlatestProducts, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
import { adminOnly } from "../middlewares/auth.js";


const app=express.Router();
// Create New Product - /api/v1/product/new
app.post("/new",singleUpload,adminOnly,newProduct);
// To get Last all Product with filters - api/v1/product/all
app.get("/all",getAllProducts)
// Create New Product - /api/v1/product/latest

app.get("/latest",getlatestProducts);
// Create New Product - /api/v1/product/categories

app.get("/categories",getAllCategories);
// Create New Product - /api/v1/product/admin-products

app.get("/admin-products",getAdminProducts);

app.route("/:id")
.get(getSingleProduct)
.put(singleUpload,updateProduct)
.delete(deleteProduct);



export default app;