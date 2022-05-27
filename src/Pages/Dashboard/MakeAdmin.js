import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MakeAdmin = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>from make an admin page : {users.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;