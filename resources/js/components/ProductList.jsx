import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products . . .</div>
    };

    if (error) {
        return <div>Error: {error}</div>
    };

    return (
        <>
            <div className="product-grid">
                {products.map(product => {
                    <div key={product.id} className="product-card">
                        <img src={`/storage/${product.image}`} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: Rp{product.price}</p>
                        <a href={`/products/${product.slug}`}>View Details</a>
                    </div>
                })}
            </div>
        </>
    )
}