import React from 'react';
import {
Link,
} from "react-router-dom";

function AboutPage() {
    return (
    <div className='page'>
        <h1 className='h1About'>About Page</h1>
        <p>This is information about the company</p>
        <Link style={{marginTop:'20px'}} to="/">Back to Home</Link>
    </div>
    );
}

export default AboutPage;