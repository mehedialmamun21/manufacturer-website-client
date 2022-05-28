import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { useForm } from "react-hook-form";

const MyProfile = () => {

    const [details, setDetails] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/user/${user?.email}`)
                .then((res) => res.json())
                .then((data) => setDetails(data));
        }
    }, [user?.email]);


    return (

        <h2 className='text-center text-2xl my-20'> Your Email : <span className='font-bold text-success'>{details.email}</span> </h2>
    );
};

export default MyProfile;