import React from 'react';
import { useEffect, useState } from 'react';
import ReviewCollection from './ReviewCollection';

const ShowReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);


    return (

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
            {
                reviews.map((review) => (
                    <ReviewCollection
                        key={review._id}
                        review={review}
                    ></ReviewCollection>
                ))
            }
        </div>

    );
};

export default ShowReview;