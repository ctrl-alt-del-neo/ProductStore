import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
// import userRoutes from "./routes/userRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json()); // allows us to accept json data in the req.body
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
})

app.listen(port, () => {
    connectDB();
    console.log(`Server running on port ${port}`);
});