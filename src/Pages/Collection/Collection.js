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
                <h2 class="card-title"><span className='font-bold text-accent text-2xl'>{name}</span></h2>
                <h5> <span className='font-semibold'>Price :</span> BDT <span className='text-primary font-bold text-lg'>{price}</span> / pcs</h5>
                <p>{description}</p>
                <p> <span className='font-semibold'>Available :</span> <span className='text-primary font-bold text-lg'>{available_quantity}</span> pcs</p>
                <p><span className='font-semibold'>Min Order :</span> <span className='text-primary font-bold text-lg'>{min_order_quantity}</span> pcs</p>
                <div className="card-actions">
                    <button class="btn btn-primary font-bold bg-gradient-to-r from-secondary to-primary text-white w-full" onClick={() => navigateToPurchasePage(_id)}> <b>Buy Now</b> </button>
                </div>
            </div>
        </div>
    );
};

export default Collection;