import React, { useEffect } from 'react'
import Banner from './Banner'
import './home.css'
import Slide from './Slide'
import { getProducts } from '../redux/actions/Action';
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from '@mui/material';

const Maincomp = () => {

    const { products } = useSelector(state => state.getproductsdata);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());

    },[dispatch]);
    return (
        <>
            <div className='home_section'>
                <div className='banner-part'>
                    <Banner />
                </div>
                <div className='slide_part'>
                    <div className='left_slide'>
                        <Slide title="Deal Of The Day" products={products} />

                    </div>
                    <div className='right_slide'>
                        <h4>Festive latest launches</h4>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cashback-static/upload/files/2021-09-29/4fdc35d6c42c976415da5355fabe64e0.jpg' alt='' />
                        <a href='#'>See More</a>

                    </div>

                </div>
                <Slide title="Today's Deal" products={products} />
                <div className='center_img'>
                    <img src='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg' alt='' />

                </div>
                <Slide title="Best Seller" products={products} />
                <Slide title="Upto 80% Off" products={products} />


            </div>
            <Divider/>

        </>
    )
}

export default Maincomp
