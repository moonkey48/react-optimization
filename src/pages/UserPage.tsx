import React, { Suspense } from 'react';
import fetchData from '../api/fetchData';
import Loading from '../components/Loading';
import User from '../components/User';

const UserPage = () => {
    return (
        <main>
            <h1>welcome user. </h1>
            <Suspense fallback={<Loading loadDataName='user'/>}>
                <User resource={fetchData('1')} />
            </Suspense>
        </main>
    )
}

export default UserPage;