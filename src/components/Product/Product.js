import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    const{img, name, seller, stock, star, price} = props.product
    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <h6>By- {seller}</h6>
                <h2>${price}</h2>
                <p>Only {stock} left in stock</p>
                <br></br>
                <button onClick = {()=>props.handleAddToCart(props.product)} className='main-btn'><FontAwesomeIcon icon={faShoppingCart}/>Add to cart</button>
                <br />
                <Rating 
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating={star}
                readonly></Rating>
            </div>
        </div>
    );
};

export default Product;