import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    let itemsOrdered = 0
    let totalPrice = 0;

    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1
        }
        itemsOrdered = itemsOrdered + product.quantity
        totalPrice = totalPrice + product.price* product.quantity
    }


    return (
        <div>
           <h2>Items Ordered:{itemsOrdered} </h2> 
           <h5>Total Price : {totalPrice.toFixed(2)}</h5>

        </div>
    );
};

export default Cart;