/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap.js';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import './components/Example.jsx';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProductList } from './components/ProductList.jsx';
import { ProductDetail } from './components/ProductDetail.jsx';

function App() {
    return (
        <Router>
            <Route exact path='/' component={<ProductList />} />
            <Route path='/products/:slug' component={<ProductDetail />} />
        </Router>
    );
}

render(<App />, document.getElementById('root'));