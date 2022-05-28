import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import PrimaryButton from '../Shared/PrimaryButton';


const OrderProcess = () => {
    const [user, loading, error] = useAuthState(auth);
    const { serviceId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://mighty-woodland-94460.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);



    const handleBookingSubmit = event => {
        event.preventDefault();

        const booking = {
            email: user.email,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value,
            parts: product.name
        }

        fetch('https://mighty-woodland-94460.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.success) {
                    toast(`Order has been placed successfully`)
                }

            })
    }



    return (
        <div>
            <label for="my-modal" class="btn modal-button">place order</label>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Orders for : <span className='text-secondary'>{product.name}</span></h3>
                    <form onSubmit={handleBookingSubmit} className='grid grid-cols-1 gap-4 justify-items-center mt-4'>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='quantity' placeholder="Product Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default OrderProcess;