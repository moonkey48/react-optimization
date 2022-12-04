import React from 'react';
import LazyLoad from 'react-lazyload';


const LazyLoader = () => {
    
    return (
    <ul>
        <li>
        <LazyLoad height={200} offset={500}>
            <img src="https://picsum.photos/id/230/500/500"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500}>
            <img src="https://picsum.photos/id/231/500/500"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500}>
            <img src="https://picsum.photos/id/232/500/500"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500}>
            <img src="https://picsum.photos/id/233/500/500"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500}>
            <img src="https://picsum.photos/id/234/500/500"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500}>
            <img src="https://picsum.photos/id/235/500/500"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500}>
            <img src="https://picsum.photos/id/236/500/500"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500}>
            <img src="https://picsum.photos/id/237/500/500"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500}>
            <img src="https://picsum.photos/id/238/500/500"/>
        </LazyLoad>
        </li>
    </ul>    
    )
}

export default LazyLoader;