import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const MyPortfolio = () => {
    return (
        <div className='min-h-screen mt-10 text-xl'>
            <h2>Hi, I am <span className='font-bold'> Md. Mehedi Al Mamun</span></h2>
            <p>Email : mehedialmamuncse@gmail.com </p>
            <p>Educational Background : studying B.Sc (Engg) in CSE at HSTU</p>
            <p className='font-bold mt-10 mb-2'>Skills : </p>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Vanilla CSS</li>
            <li>Javascript</li>
            <li>Node Js</li>
            <li>Express Js</li>
            <li>MongoDB</li>
            <li>Firebase authentication</li>
            <p className='font-bold my-5'>Projects Link : </p>
            <div className='grid grid-cols-1 gap-4'>
                <a href="https://doctors-portal-a0858.web.app/"><PrimaryButton>Project - 1 </PrimaryButton></a>
                <a href="https://smartphone-warehouse-7f130.web.app/"><PrimaryButton>Project - 2 </PrimaryButton></a>
                <a href="https://ema-john-simple-site-react.netlify.app/"><PrimaryButton>Project - 3 </PrimaryButton></a>
                <a href="https://laptop-analysis-and-reviews-website.netlify.app/"><PrimaryButton>Project - 4 </PrimaryButton></a>
                <a href="https://laptop-bazar-react.netlify.app/"><PrimaryButton>Project - 5 </PrimaryButton></a>
            </div>
        </div>
    );
};

export default MyPortfolio;