import React from 'react';
import summaryImg from '../../Images/summary.png';
import customerImg from '../../Images/customers_icon.png';
import annualImg from '../../Images/annual_icon.png';
import reviewImg from '../../Images/review.jpg';
import toolsImg from '../../Images/tools.png';

const BusinessSummary = () => {
    return (

        <div>
            <div class="flex flex-col w-full border-opacity-50 text-3xl mt-16 font-bold text-accent">
                <div class="divider">Business Summary</div>
            </div>

            <div style={{
                backgroundImage: `url(${summaryImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }} class="stats stats-vertical lg:stats-horizontal shadow w-full mx-auto mt-10 mb-20 text-center p-20">

                <div class="stat">
                    <img className='mx-auto' src={customerImg} width="60px" alt="" />
                    <div class="stat-value">100+</div>
                    <div class="stat-desc text-2xl text-lime-600 font-bold">↘︎ Customers</div>
                </div>

                <div class="stat">
                    <img className='mx-auto' src={annualImg} width="60px" alt="" />
                    <div class="stat-value">120 M+</div>
                    <div class="stat-desc text-2xl text-info font-bold ">↘︎ Annual revenue</div>
                </div>

                <div class="stat">
                    <img className='mx-auto' src={reviewImg} width="60px" alt="" />
                    <div class="stat-value">33K+</div>
                    <div class="stat-desc  text-2xl text-accent font-bold">↘︎ Reviews</div>
                </div>

                <div class="stat">
                    <img className='mx-auto' src={toolsImg} width="60px" alt="" />
                    <div class="stat-value">50+</div>
                    <div class="stat-desc text-2xl text-secondary font-bold">↘︎ Tools</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;