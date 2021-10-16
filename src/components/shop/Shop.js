import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Shop = () => {
    const[cart, setCart] = useState([])
    const [products, setProducts] = useState([]);
    const[displayProducts, setDisplayProducts] = useState([])
    
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data)
        })
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.key)
    }

    const handleProductSearch = (event)=>{
        const searchedText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchedText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }

    useEffect(()=>{
        
        if(products.length){
            const storageCart = getStoredCart();
            let localCart =[]
        
        for(const key in storageCart){
            const quantity = storageCart[key];
            const product = products.find(product => product.key === key);
            product.quantity = quantity;
            localCart.push(product);
        }
        setCart(localCart)
        }
        
    },[products])
    return (
        <>
        <div>
        <InputGroup className="mb-3 bg-dark">
            <FormControl onChange= {handleProductSearch}
            placeholder="Search Product"
            aria-label="Seacrh Product"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
            Search
            </Button>
        </InputGroup>
        </div>
        <div className='Shop-container'>
            <div className='shop'>
                {
                    displayProducts.map(product => <Product key ={product.key} product = {product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;