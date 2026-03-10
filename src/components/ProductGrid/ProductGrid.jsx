import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productData } from "../../data.js";
import './ProductGrid.css';

const ProductGrid = () => {
    return(
        <div className="product-grid">
            {productData.map((item) => (
                <ProductCard 
                 key = {item.id}
                 item = {item}
                />
            ))}
        </div>
    );
}
export default ProductGrid;