import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ProductPage from './components/products.jsx'
import AddBookPage from './components/book.jsx'
import HomePage from './components/Home.jsx'
import AboutPage from './components/about.jsx'

function App() {
  return (<>
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} element={<HomePage />}/>
        <Route path="/addbook" component={AddBookPage} element={<AddBookPage />} />
        <Route path="/about" component={AboutPage} element={<AboutPage />}/>
        <Route path="/products/:id" component={ProductPage} element={<ProductPage />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;