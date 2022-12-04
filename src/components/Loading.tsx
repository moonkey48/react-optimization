import React from 'react';

type LoadingProps = {
    loadDataName?: string
}
const Loading = ({loadDataName}: LoadingProps) => {
    return <h1>load {loadDataName || ''}...</h1>
}

export default Loading;