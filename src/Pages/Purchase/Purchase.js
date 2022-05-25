import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {


    const { serviceId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);



    return (
        <div>
            <div className='min-h-screen'>
                <h2 className='text-center text-2xl font-semibold my-10'>From Purchase page</h2>

                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={product.img} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Availability: <span className='text-secondary'>Available</span></p>
                        <p>Min Order: {product.min_order_quantity}</p>
                        <p>Available: {product.available_quantity}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;