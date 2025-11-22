import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(200).json({success: true, data: products});
}

export const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new Product(product);
    try{
        await newProduct.save();
        return res.status(201).json({success: true, data: newProduct});
    } catch(error){
        console.log("Error in create product", error.message);
        return res.status(500).json({success: false, message: error.message});
    }
}

export const getSingleProduct = async (req, res) => {
    const { id } = req.params;
    try{
        const product = await Product.findById(id);
        return res.status(200).json({success: true, data: product});
    } catch(error){
        console.log("Error in get product", error.message);
        return res.status(404).json({success: false, message: "Product not found"});
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        return res.status(200).json({success: true, data: updatedProduct});
    } catch(error){
        console.log("Error in update product", error.message);
        return res.status(404).json({success: false, message: "Product not found"});
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try{
        await Product.findByIdAndDelete(id);
        return res.status(200).json({success: true, message: "Product deleted"});
    } catch(error){
        console.log("Error in delete product", error.message);
        return res.status(404).json({success: false, message: "Product not found"});
        // return res.status(500).json({success: false, message: error.message});
    }
}