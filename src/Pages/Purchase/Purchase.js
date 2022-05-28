import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderProcess from './OrderProcess';

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
                <h2 className='text-center text-gray-500 text-3xl font-bold my-10'>Purchase page</h2>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={product.img} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title"><span className='text-yellow-500 text-2xl'>{product.name}</span></h2>
                        <p>Description : {product.description}</p>
                        <p>Price : BDT <span className='text-accent font-bold'>{product.price}</span> /unit</p>
                        <p>Availability : <span className='text-secondary'>Available</span></p>
                        <p>Min Order : <span className='text-accent font-bold'>{product.min_order_quantity}</span> pcs</p>
                        <p>Available : <span className='text-accent font-bold'>{product.available_quantity}</span> pcs</p>
                    </div>
                </div>
                <div className='my-10'>
                    <OrderProcess></OrderProcess>
                </div>
            </div>

        </div>
    );
};

export default Purchase;