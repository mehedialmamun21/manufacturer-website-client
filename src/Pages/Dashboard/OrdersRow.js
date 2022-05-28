import React from 'react';
import { toast } from 'react-toastify';

const OrdersRow = ({ order, index }) => {
    const { email, parts, quantity } = order;

    const handleDelete = email => {
        fetch(`http://localhost:5000/booking/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success('Successfully deleted');
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{parts}</td>
            <td>{quantity}</td>
            <td><button onClink={() => handleDelete(email)} class="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default OrdersRow;