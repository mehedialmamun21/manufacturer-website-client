import React from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = "https://mighty-woodland-94460.herokuapp.com/service";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })

    };
    return (
        <div className='addItem w-50 mx-auto mt-10'>
            <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered w-full max-w-xs' required placeholder="Product Name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='input input-bordered w-full max-w-xs my-2' required placeholder="Description" {...register("description")} />
                <input className='input input-bordered w-full max-w-xs' required placeholder="Price" type="number" {...register("price")} />
                <input className='input input-bordered w-full max-w-xs my-2' required placeholder="Available_Quantity" type="number" {...register("available_quantity")} />
                <input className='input input-bordered w-full max-w-xs' required placeholder="Min_Order_Quantity" type="number" {...register("min_order_quantity")} />
                <input className="input input-bordered w-full max-w-xs my-2" required placeholder="Photo URL" type="text" {...register("img")} />
                <input className="btn w-full max-w-xs" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;