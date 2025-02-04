import React, { useState, useEffect } from "react";
import axios from "axios";
import { SEO } from "./SEO";
import { Helmet } from "react-helmet";

export const ProductDetail = ({ match }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${match.params.slug}`);
                setProduct(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [match.params.slug]);

    if (loading) return <div>Loading product details . . .</div>;
    if (error) return <div>Error: error</div>;

    const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": `${window.location.origin}/storage/${product.image}`,
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": product.price
        }
    };

    return (
        <>
            <div className="product-detail">
                <SEO
                    title={product.name}
                    description={product.meta_description}
                    keywords={product.meta_keywords}
                />
                <Helmet>
                    <script type="application/ld+json">

                    </script>
                </Helmet>
                <h1>{product.name}</h1>
                <img src={`/storage/${product.image}`} alt={product.name} />
                <p>{product.description}</p>
                <p>Price: Rp{product.price}</p>
            </div>
        </>
    );
}