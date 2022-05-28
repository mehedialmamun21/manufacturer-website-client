import React, { useEffect, useState } from 'react';

const ManageOrders = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/manage")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);


    return (
        <div>
            <h2>Manage orders</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Product</th>
                            <th>Ordered Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.email}</td>
                                <td>{product.parts}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;