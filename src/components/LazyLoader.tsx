import React from 'react';
import LazyLoad from 'react-lazyload';
import ImgPlaceholder from './ImgPlaceholder';


const LazyLoader = () => {
    
    return (
    <ul style={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
        <li>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/230/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/231/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/232/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/233/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/234/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/235/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/236/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/237/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/238/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/239/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/240/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/241/200/200"/>
        </LazyLoad>
        <LazyLoad height={200} offset={500} placeholder={<ImgPlaceholder/>}>
            <img src="https://picsum.photos/id/242/200/200"/>
        </LazyLoad>
        </li>
    </ul>    
    )
}

export default LazyLoader;