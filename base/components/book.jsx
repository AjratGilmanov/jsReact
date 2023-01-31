import React from 'react';
import {
Link,
} from "react-router-dom";
import { products } from './products.jsx'


function AddBookPage() {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [text,setText] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the book to the products array here
    products.push({
      id: products.length + 1,
      name,
      description,
      author,
      text,
    });
    // Clear the form inputs
    setName('');
    setDescription('');
    setAuthor('');
    setText('');
  };

  return (
    <div className='page'>
      <h1>Add Book Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="text">Text:</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
}


export default AddBookPage;