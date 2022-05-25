import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ExtraCarousel from './ExtraCarousel';
import ExtraLogistics from './ExtraLogistics';

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

            <div class="flex flex-col w-full border-opacity-50 text-2xl font-bold text-accent my-10">
                <div class="divider">ABOUT OUR PRODUCTS</div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                {collections.map((collection) => (
                    <Collection key={collection._id} collection={collection}></Collection>
                ))}
            </div>

            <BusinessSummary></BusinessSummary>

            <div class="flex flex-col w-full border-opacity-50 text-2xl font-bold text-accent my-40">
                <div class="divider">WHAT CUSTOMERS SAY ABOUT KAVO PARTS</div>
            </div>

            <ExtraLogistics></ExtraLogistics>

            <ExtraCarousel></ExtraCarousel>



        </div>
    );
};

export default Home;