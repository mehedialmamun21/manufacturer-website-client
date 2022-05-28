import React from 'react';

const ReviewCollection = ({ review }) => {
    const { _id, description } = review;
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <div class="card-body">
                <h5> <span className='font-semibold'>Id: </span><span className='text-primary font-bold text-lg'>{_id}</span></h5>
                <p>Review : <span className='text-primary font-bold text-lg'>{description}</span> </p>
            </div>
        </div>
    );
};

export default ReviewCollection;