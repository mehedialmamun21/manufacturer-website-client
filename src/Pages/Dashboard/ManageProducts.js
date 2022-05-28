import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure ?");
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    const remaining = products.filter((product) => product._id !== id);
                    setProducts(remaining);
                });
        }
    };

    return (
        <div>
            <h2>from manage products route</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Available</th>
                            <th>Min Order</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <small>{product.description}</small>
                                </td>
                                <td>{product.available_quantity}</td>
                                <td>{product.min_order_quantity}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="btn btn-warning"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;