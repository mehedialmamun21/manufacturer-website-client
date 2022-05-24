import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-banner-section-backImg">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold ">Hello there</h1>
                    <p class="mb-5 text-warning"><b>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</b></p>
                    {/* <button class="btn btn-primary">Get Started</button> */}
                    <PrimaryButton><b>Get Started</b></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;