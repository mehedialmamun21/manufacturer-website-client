import React from 'react';
import logisticImg from '../../Images/logisticImg.jpg';
import logistic1 from '../../Images/logistic1.jpg';
import logistic2 from '../../Images/logistic2.jpg';
import logistic3 from '../../Images/logistic3.jpg';
// import logistic4 from '../../Images/logistic4.jpg';
import logistic5 from '../../Images/logistic5.jpg';
import logistic6 from '../../Images/logistic6.jpg';

const ExtraLogistics = () => {
    return (
        <div>
            <div class="flex flex-col w-full border-opacity-50 text-2xl font-bold text-accent my-10">
                <div class="divider">LOGISTICS</div>
            </div>
            <div>
                <img className='mx-auto' src={logisticImg} alt="" />
                <div className='lg:flex justify-center '>
                    {/* <img src={logistic1} alt="" /> */}
                    <img className='mx-1' src={logistic2} alt="" />
                    <img src={logistic3} alt="" />
                    {/* <img src={logistic4} alt="" /> */}
                    <img className='mx-1' src={logistic5} alt="" />
                    <img src={logistic6} alt="" />
                </div>
            </div>
            <div class="flex flex-col w-full border-opacity-50 my-10">
                <div class="divider font-bold text-accent text-2xl">OUR PROMISE</div>
                <h2 className='text-center text-xl my-4'>As a specialist car parts supplier we bring you the parts you need</h2>
                <p>
                    We have been a car parts supplier since 1986. From the start we are a specialist. First in parts for Asian cars and now also in shock absorbers for all brands and in parts for all electric vehicles. We always look for opportunities to fulfil your needs. By being a specialist we can promis you full ranges, high availablity, premium quality and competitive prices.
                </p>
                <br />
                <p>
                    Only the best is good enough for us. So we work with OEM car parts manufacturers and IATF 16949-certified specialists. We have built strong relations with them so we can offer excellent prices, without compromising on quality. Our parts are made of superior-quality material and tested to perfection. We promise best-quality car parts for the best price and offer a standard warranty of three years.
                </p>
                <br />
                <p>
                    We take service to a higher level. We want to grow our joint business - by being flexible, loyal and transparent. We strive for long-term partnerships as we believe that is the base for a solid, secure and future-proof cooperation, which is valuable and profitable for both parties.
                </p>
                <br />
                <p>
                    We are your car parts supplier for Asian cars, shock absorbers for all brands and parts for electric vehicles. You want the best moving aftermarket car parts for your market. We got them. With our analyses, experience, vehicle data and your market information, we provide stocks with high sell-out potential. And the prices? We adapt them to your market, so you can improve your margins.
                </p>
            </div>
        </div>
    );
};

export default ExtraLogistics;