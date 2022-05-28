import React from 'react';

const ReviewCollection = ({ review }) => {
    const { _id, description, rating } = review;
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <div class="card-body">
                <p> Rating : <span className='text-primary font-bold text-lg'>{rating}</span></p>
                <p> Review : <span className='text-primary text-lg font-semibold'>{description}</span> </p>
            </div>
        </div>
    );
};

export default ReviewCollection;