import React, { Suspense } from 'react';
import fetchData from '../api/fetchData';
import Loading from '../components/Loading';
import User from '../components/User';
import Header from '../components/Header';

const UserPage = () => {
    return (
        <>
        <Header/>
        <main>
            <Suspense fallback={<Loading loadDataName='user'/>}>
                <User resource={fetchData('1')} />
            </Suspense>
        </main>
        </>
    )
}

export default UserPage;