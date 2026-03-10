import React from "react";
import './ProductCard.css';

const ProductCard = ({item}) => {

    return(
        <div className="product-card">
            <div className="image-card">
                <img src= {item.image} alt= {item.name} />
            </div>
            <div className="description">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
            </div>

        </div>
    );
}
export default ProductCard;