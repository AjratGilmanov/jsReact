import React from 'react';
import {
Link, NavLink, useParams,
} from "react-router-dom";

export var products = [
    { id: 1, name: 'harry potter and chto-to tam', description: 'something about harry potter and his adventures out there somewhere', author: 'Someone',text: 'Что-то там произошло и мне понравилось'},
    { id: 2, name: 'primer', description: 'i dont know how to read it', author: "I can't read this name", text: 'Я не умею читать'},
    { id: 3, name: 'gas welding manual', description: 'this must be an important book.', author: 'maybe someone important', text: 'Этому обучают в колледжах' },
];

function ProductPage() {
    const params = useParams();
    const prodId = params.id;
    const phone = products.find(p=>p.id == prodId);
    if(phone === undefined)
        return <div className='page'><h2>I cant find this Book</h2></div>
    else
        return (
            <div className='page'>
            
            <h2>Reviews</h2><br />
            <ul>
                <p>Name: "{phone.name}"</p><br />
                <p>Author: {phone.author}</p><br />
                <p>Description: {phone.description}</p><br />
            </ul>
            <Link to="/">Back to Home</Link>
            <br />
            <div className="">
                <p>first reader review: {phone.text}</p>
            </div>
            </div>
            );

}

export default ProductPage;

















