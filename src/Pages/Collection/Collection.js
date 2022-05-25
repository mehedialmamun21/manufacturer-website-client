import React from 'react';
import { useNavigate } from 'react-router-dom';

const Collection = ({ collection }) => {
    const { _id, name, price, img, description, available_quantity, min_order_quantity
    } = collection;

    const navigate = useNavigate();

    const navigateToPurchasePage = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <h5>{price}</h5>
                <p>{description}</p>
                <p>Available quantity : {available_quantity}</p>
                <p>Min order quantity : {min_order_quantity}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary font-bold bg-gradient-to-r from-secondary to-primary text-white" onClick={() => navigateToPurchasePage(_id)}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Collection;