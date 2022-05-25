import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {

    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then((res) => res.json())
            .then((data) => setCollections(data.splice(0, 6)));
    }, []);

    return (
        <div className='min-h-screen'>
            <Banner></Banner>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                {collections.map((collection) => (
                    <Collection key={collection._id} collection={collection}></Collection>
                ))}
            </div>

            <BusinessSummary></BusinessSummary>



        </div>
    );
};

export default Home;