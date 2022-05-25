import React from 'react';

import notFoundImg from '../../Images/404-img.jpg';

const NotFound = () => {
    return (
        <div className='error min-h-screen text-center my-40'>
            <img className='mx-auto ' src={notFoundImg} alt="" />
            <h2 className='text-2xl my-5 font-bold text-accent'>404 ! Not Found.. </h2>
        </div>
    );
};

export default NotFound; 