// import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-add-to-cart'
            >Add to Cart {cartIcon}
            </button>
        </div>
    );
};

export default Product;