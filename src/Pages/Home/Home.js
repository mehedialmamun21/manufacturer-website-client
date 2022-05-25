import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';
import Banner from './Banner';


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

            <div className="grid grid-cols-2 gap-7">
                {collections.map((collection) => (
                    <Collection key={collection._id} collection={collection}></Collection>
                ))}
            </div>

        </div>
    );
};

export default Home;