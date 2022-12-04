import React, { Suspense } from 'react';
import fetchData from '../api/fetchData';
import Loading from './Loading';
import User from './User';

const Main = () => {
    return (
        <main>
            <h1>use suspense</h1>
            <Suspense fallback={<Loading loadDataName='user'/>}>
                <User resource={fetchData('1')} />
            </Suspense>
        </main>
    )
}

export default Main;