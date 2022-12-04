import React, { Suspense } from 'react';
import Loading from './Loading';
import Posts from './Posts';

type UserProps = {
    resource: {
        user:any,
        posts:any,
    }
}
const User = ({ resource }: UserProps) => {
    const user = resource.user.read();
    return (
        <div>
            <h3>{user.name} ({user.email})이 작성한 글</h3>
            <Suspense fallback={<Loading loadDataName='posts'/>}>
                <Posts resource={resource} />
            </Suspense>
        </div>
    )
}

export default User;