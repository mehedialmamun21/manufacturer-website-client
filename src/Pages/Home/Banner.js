import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-banner-section-backImg mb-10">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-white">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold ">YOUR CAR PARTS SUPPLIER</h1>
                    <p class="mb-5 text-lg mb-10"><b>FOR ASIAN CARS, ELECTRIC CARS AND SHOCK ABSORBERS </b></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;