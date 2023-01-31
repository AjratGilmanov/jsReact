import React from 'react';
import {
Link,
} from "react-router-dom";
import { products } from './products.jsx'


function HomePage() {
    return (
    <div className='page'>
    <h1>Home Page</h1>
    <ul>
        {products.map((product) => (
        <li className='lishki' key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
        ))}
    </ul>
    <Link  to="/addbook">Add Book</Link>
    <br />
    <Link to="/about">About</Link>
    </div>
);
}

export default HomePage;